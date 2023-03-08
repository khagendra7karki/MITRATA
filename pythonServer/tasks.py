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
        db.create_new_user( message['key'],json.dumps( message['value']) )        
        return json.dumps({ 'task': 'create', 'status': 'successful'})
    
    # if( message['task'] =='photo'):
    #     result = db.verify_user('khagendra.karki007@gmail.com')
    #     return result
    
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