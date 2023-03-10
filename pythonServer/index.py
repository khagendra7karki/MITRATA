import websockets
import asyncio
import json

#custom database module
from database import Database

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
def store_chat( db, chat ):
    db.store_chat( chat )

def retrieive_chat( requester ):
    pass
def store_notification( chat ):
    pass
def retrieve_notification():
    pass

# update user session 
def update_user_session(email, last_suggestion, segment_index ):
    user_session_dict[ email ]['last_suggestion']= last_suggestion
    user_session_dict[ email ][ 'segment_index'] = segment_index


# creates a new user session object/ dictionary
def create_user_session(websocket, email, gender, last_suggestion, segment_index ):
    ''' creates a use session '''
    global user_session_dict
    print( 'the genderr is ' + gender )
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
        print( message )
        requester_id = message['requester']
        gender = user_session_dict[requester_id]['gender']
        segment_index = user_session_dict[requester_id]['segment_index']
        last_suggestion = user_session_dict[requester_id]['last_suggestion']
        suggestion, last_key, segment_index =  get_suggestion( user_session_dict[ requester_id ]['gender'],1, last_suggestion,segment_index )
        suggestion = json.loads( suggestion )
        response_message = { 'status': 'successful','task': 'getData', 'content': suggestion}
        update_user_session( message['requester'], last_key, segment_index)
        return  json.dumps( response_message )
    
    if( message['notification'] =='notification' ):
        result = db.verify_user( message['email'] + 'a')
        if not result:
            pass
        db.create_new_user( message['email'] + 'a', { 'notification': message['notification'] })
    return json.dumps( defaultResponse )




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
        print( user_response )            
        user_response['image'] = result['image'] 
        final_response.append( user_response )
    return json.dumps( final_response ), last_key, segment_index




async def main( websocket, path):
    global LEN
    # connected.add( websocket )
    # if( len( connected ) > LEN ):           
    #     LEN = LEN + 1
    print( 'A client just connected ')
    try:
        async for message in websocket:
            print( websocket )
            print( 'this is my  work')
            # print( 'Received message from the client ' + str(message) )
            message = json.loads( message )
            # user_session_dict[ message['id']]
            response = task( db, message, websocket ) 
            # dict_response = json.loads( response )
            # if( dict_response['task'] == 'verify' and dict_response['status'] == 'successful'):
            #     user_session
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



