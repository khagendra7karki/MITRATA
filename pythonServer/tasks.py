import json   #import json library for parsing json


def task( db, message ):
    # message = json.loads( message )
    if( message['task'] == 'verify' ):
        verification_result =  db.verify_user( message['email'] )
        if( verification_result ):
            return True
    
    if( message['task'] == 'create' ):
        print( message )
        db.create_new_user( message['key'],str(message['value']) )        
    return False