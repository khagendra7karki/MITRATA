# import json   #import json library for parsing json

# defaultResponse = {
#     'status': 'unsuccessful'
# }

# randomDataSample = {
#     'email': '',
#     'name': '',
#     'age':'',
#     'motto': '',
#     'image': ''
# }

# userDataSample= {
#     'email' : '',
#     'gender': '',
#     'notification': '',
#     'chat': '',

# }




# def task( db, message, websocket, user_session_info = None ):
#     # message = json.loads( message )
#     if( message['task'] == 'verify' ):
#         id = message['email']
#         verification_result =  db.verify_user( id )
#         if( verification_result ):

#             #proceess only if the password is same
#             if(verification_result['password'] == message['password']):
#                 response = {}
#                 response['status'] = 'successful'
#                 response['task'] = 'verify'
#                 response['user'] = { 'email': , 
#                                      'age': verification_result['age'],
#                                      'name': verification_result['firstName']', 
#                                      'gender': verification_result['gender'], 
#                                      'notification': '',
#                                      'chat': '',
#                                      'image': verification['image']
#                                      }

#                 # after verification get suggestion
#                 suggestion, last_key, segment_index = get_suggestion( response['gender'], 2 )
#                 response['suggestion'] = suggestion
#                 session = create_user_session(  websocket , id, last_key, segment_index )

#                 return json.dumps( suggestion ) , session
        
#         return json.dumps( defaultResponse )
    
<<<<<<< HEAD
#     if( message['task'] == 'create' ):
#         print( 'A record added to the database')
#         db.create_new_user( message['key'],json.dumps( message['value'] ))        
#         return json.dumps({ 'task': 'create', 'status': 'successful'})
=======
    if( message['task'] == 'create' ):
        db.create_new_user( message['key'],json.dumps( message['value']) )        
        return json.dumps({ 'task': 'create', 'status': 'successful'})
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
    
    
<<<<<<< HEAD
#     if( message['task'] == 'getData'):
#         print( message )
#         return get_suggestion( message['task'], )
    
#     if( message['notification'] =='notification' ):
#         result = db.verify_user( message['email'] + 'a')
#         if not result:
#             pass
#         db.create_new_user( message['email'] + 'a', { 'notification': message['notification'] })
#     return json.dumps( defaultResponse )




# def get_suggestion( gender,  number, last_suggestion = None, segment_index = 0 ):
    
#     results, last_key, segment_index = db.get_random_data( gender, segment_index,last_suggestion, number )
#         if not results:
#             return json.dumps( defaultResponse )
#         final_response = {}
#         for result in results:
#             user_response = {}
#             user_response['email'] = result['key']
#             user_response['age'] = result['age']
#             user_response['name'] = result['firstName']
#             user_response['motto'] = result['motto']
#             print( user_response )            
#             user_response['image'] = result['image'] 
#             if 'content' in final_response:
#                 final_response['content'].append( user_response )
#             else:
#                 final_response['content'] = [user_response]
#         final_response['status'] = 'successful'
#         final_response['task'] = 'getData'
#         return json.dumps( final_response ), last_key, segment_index


# def create_user_session(websocket, email, last_suggestion, segment_index ):
# ''' creates a use session '''

#     user_session = {
#                         ''+ email + '': {'socket' : websocket, 
#                                     'segment_index': segment_index , 
#                                     'last_suggestion': last_suggestion} 
#                     }
    
    
#     return user_session
=======
    if( message['task'] == 'getData'):
        print( message )
        key, value = db.get_random_data( message['gender'] )
        if not key and (not value):
            return json.dumps( defaultResponse )
        user_response = randomDataSample
        user_response['email'] = key
        user_response['age'] = value['age']
        user_response['name'] = value['firstName']
        user_response['motto'] = value['motto']
        user_response['image'] = value['image'] 
        user_response['status'] = 'successful'
        user_response['task'] = 'getData'
        return json.dumps( user_response )
        
    return json.dumps( defaultResponse )
>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
