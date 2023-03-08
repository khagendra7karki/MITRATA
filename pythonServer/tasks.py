import json   #import json library for parsing json

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

def task( db, message ):
    # message = json.loads( message )
    if( message['task'] == 'verify' ):
        id = message['email']
        print( message )
        verification_result =  db.verify_user( id )
        if( verification_result ):
            if(verification_result['password'] == message['password']):
                response = {}
                response['status'] = 'successful'
                response['task'] = 'verify'
                response['email'] = id 
                response['gender'] = verification_result['gender']
                response['notification'] = ''
                response['chat'] = ''

                return json.dumps( response )
        
        return json.dumps( defaultResponse )
    
    if( message['task'] == 'create' ):
        # new_image_array = []
        # for image in message['value']['image']:
        #     new_image_array.append( image['data'][5:])
        # message['value']['image'] = new_image_array
        print( 'A record added to the database')
        db.create_new_user( message['key'],json.dumps( message['value'] ))        
        return json.dumps({ 'task': 'create', 'status': 'successful'})
    
    # if( message['task'] =='photo'):
    #     result = db.verify_user('khagendra.karki007@gmail.com')
    #     return result
    
    if( message['task'] == 'getData'):
        print( message )
        results = db.get_random_data( message['gender']  , message['number'])
        if not results:
            return json.dumps( defaultResponse )
        final_response = {}
        for result in results:
            user_response = {}
            user_response['email'] = result['key']
            user_response['age'] = result['age']
            user_response['name'] = result['firstName']
            user_response['motto'] = result['motto']
            print( user_response )            
            user_response['image'] = result['image'] 
            if 'content' in final_response:
                final_response['content'].append( user_response )
            else:
                final_response['content'] = [user_response]
        final_response['status'] = 'successful'
        final_response['task'] = 'getData'
        return json.dumps( final_response )
        
    return json.dumps( defaultResponse )