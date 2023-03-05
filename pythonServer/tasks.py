import json   #import json library for parsing json


def task( db, message ):
    # message = json.loads( message )
    if( message['task'] == 'verify' ):
        verification_result =  db.verify_user( message['email'] )
        if( verification_result ):
            # print( 'type of the object is ', type(verification_result ))
            # print( 'the value of the variable is ', verification_result )
            verification_result = json.loads( verification_result )
            return verification_result['password'] == message['password']
        return False
    
    if( message['task'] == 'create' ):
        db.create_new_user( message['key'],json.dumps( message['value']) )        
        return 'created'
    
    if( message['task'] =='photo'):
        result = db.verify_user('khagendra.karki007@gmail.com')
        # image = result['image']
        # return image[0]
        print( 'the type of the result is', type(result))
        return result
        
    return """"{"default": "hi"}"""