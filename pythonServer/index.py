import websockets
import asyncio
import json

#custom database module
from database import Database
from src.lsm_tree import LSMTree


# chat = LSMTree( 'CHATt-1', 'Chat/' , 'chat_memtable_backup')


LEN = 0
PORT = 6969
user_session_dict = {}
connected = set()
defaultResponse = {
    'status': 'unsuccessful'
}

randomDataSample = {
    'email': '',
    'name': '',
    'age':'',
    'motto': '',
    'image': ''
}

userDataSample= {
    'email' : '',
    'gender': '',
    'notification': '',
    'chat': '',

}
# def add_friend( db,  message):
#     key1 = message['email1']
#     key2 = message['email2']
#     image1 = message['image1']
#     image2 = message['image2']
#     name1 = message['name1']
#     name2  = message['name2']
#     profile1 = chat.db_get( key1 )
#     profile2 = chat.db_get( key2 )

#     if( profile1 ):
#         json_profile1 = json.loads( profile1 )
#         json_profile1.append( { 'email':  key2, 'name': name2,  'text':[],'image': image2 } )

#         chat.db_set( key1, json.dumps( profile1 ))
#     else:
#         chat.db_set( key1, json.dumps( [{ 'email': key2, 'name': name2, 'text': [], 'image': image2}]))
#     if( profile2 ):
#         json_profile2 = json.loads( profile1 )
#         json_profile2.append( { 'email':  key1, 'name': name1,  'text':[],'image': image1 } )

#         chat.db_set( key2, json.dumps( profile1 ))
#     else:
#         chat.db_set( key2, json.dumps( [{ 'email': key1, 'name': name1, 'text': [], 'image': image1}]))
#     db.delete_notif( key1, key2 )

# def get_chat( key1 ):
#     result = chat.db_get( key1 )
#     print ( key1 )
#     if result:
#         json_result = json.loads( result ) 
#         # print('the json result is', json_result[0]['email'] )
#         return json_result
#     return None

    
# update user session 
def update_user_session(email, last_suggestion, segment_index ):
    user_session_dict[ email ]['last_suggestion']= last_suggestion
    user_session_dict[ email ][ 'segment_index'] = segment_index


# creates a new user session object/ dictionary
def create_user_session(websocket, email, gender, last_suggestion, segment_index ):
    ''' creates a use session '''
    global user_session_dict
    temp_user_session = {
                        ''+ email + '': {'socket' : websocket, 
                                         'gender': gender,
                                        'segment_index': segment_index , 
                                        'last_suggestion': last_suggestion} 
                    }
    user_session_dict = user_session_dict | temp_user_session
    
db = Database()
def task( db, message, websocket):
    # message = json.loads( message )
    if( message['task'] == 'verify' ):
        id = message['email']
        verification_result =  db.verify_user( id )
        if( verification_result ):

            #proceess only if the password is same
            if(verification_result['password'] == message['password']):
                response = {}
                response['status'] = 'successful'
                response['task'] = 'verify'
                response['user'] = { 'email': id , 'age': verification_result['age'],'name': verification_result['firstName'], 'gender': verification_result['gender'], 'notification': '', 'chat': '','image': verification_result['image']}

                # after verification get suggestion
                suggestion, last_key, segment_index = get_suggestion( response['user']['gender'], 2 )
                response['suggestion'] = json.loads(suggestion)
                create_user_session(  websocket , id,verification_result['gender'], last_key, segment_index )

                return json.dumps( response )
        
        return json.dumps( defaultResponse )
    
    if( message['task'] == 'create' ):
        print( 'A record added to the database')
        db.create_new_user( message['key'],json.dumps( message['value'] ))        
        return json.dumps({ 'task': 'create', 'status': 'successful'})
    
    
    if( message['task'] == 'getData'):
        # print( message )
        requester_id = message['requester']
        gender = user_session_dict[requester_id]['gender']
        segment_index = user_session_dict[requester_id]['segment_index']
        last_suggestion = user_session_dict[requester_id]['last_suggestion']
        suggestion, last_key, segment_index =  get_suggestion( gender,1, last_suggestion,segment_index )
        suggestion = json.loads( suggestion )
        response_message = { 'status': 'successful','task': 'getData', 'content': suggestion}
        update_user_session( message['requester'], last_key, segment_index)
        return  json.dumps( response_message )
    
    
    if ( message['task'] == 'store_notif'):
        result = store_notification( db, message['key'] , message['value'] )
        return result 

    if( message['task'] == 'get_chat'):
        # print( 'the requester is ', message['requester'])
        result = db.get_chat( message['requester'])
        # print( 'the result is ', result[0]['email'])
        if result:
            response = { 'task' :'get_chat', 'content': result }
            final_response = { 'task': 'get_chat'} | response
            return ( json.dumps( final_response) ) 
        return json.dumps( { 'task': 'get_chat'} | defaultResponse )
    

    if( message['task'] == 'get_notif'):
        # print( message)
        result = get_notif( db, message['requester'])
        # print( result )
        if result:
            return json.dumps( { 'status': 'successful', 'task': 'get_notif' , 'notification': result} )
            
        return json.dumps( defaultResponse )
    if message['task'] == 'add_friend':
        db.add_friend( db, message)
        return json.dumps({ 'task': 'add_friend', 'status': 'successful'})
    return json.dumps( defaultResponse )

def get_notif( db, key):
    return db.get_notif( key )


def store_notification( db, key, value ):
    db.store_notif( key, value)
    return json.dumps( {'task': 'notification', 'status': 'successful'})



def get_suggestion( gender,  number, last_suggestion = None, segment_index = 0 ):
    
    results, last_key, segment_index = db.get_random_data( gender, segment_index,last_suggestion, number )
    if not results:
        return json.dumps( defaultResponse )
    final_response = []
    for result in results:
        user_response = {}
        user_response['email'] = result['key']
        user_response['age'] = result['age']
        user_response['name'] = result['firstName']
        user_response['motto'] = result['motto']       
        user_response['image'] = result['image'] 
        final_response.append( user_response )
    return json.dumps( final_response ), last_key, segment_index



async def main( websocket, path):
    global LEN
    connected.add( websocket )
    if( len( connected ) > LEN ):           
        print( 'A client just connected ')
        LEN = LEN + 1
    try:
        async for message in websocket:
            message = json.loads( message )
            if message['task'] == 'update_chat':
                incoming_message = message['text']
                from_email = message['from']
                to_email = message['to'] 
                output = { 'task': 'update_chat','from': from_email , 'content': {'to': incoming_message, 'time': ''}}
                if to_email in user_session_dict:
                    await user_session_dict[to_email ]['socket'].send( json.dumps( output))
                    
                from_profile = db.get_chat( from_email )
                to_profile = db.get_chat( to_email )
                for texts in from_profile:
                    if texts['email'] == to_email:
                        texts['text'].append( {'from': incoming_message, 'time': ''} )

                for texts in to_profile:
                    if texts['email'] == from_email:
                        texts['text'].append({'to': incoming_message, 'time': ''})

                db.chat.db_set( to_email , json.dumps( to_profile) )
                db.chat.db_set( from_email, json.dumps( from_profile) )
                

            else:
                response = task( db, message, websocket ) 
                await websocket.send( response )
            


    except websockets.exceptions.ConnectionClosed as  e:
        print ( 'something went wrong')
        print ( e )
    finally:
        connected.remove( websocket )



start_server = websockets.serve( main, 'localhost', PORT, max_size = 2**22 )

print( 'Server is listening on port ' + str( PORT ))

asyncio.get_event_loop().run_until_complete( start_server )
asyncio.get_event_loop().run_forever()
