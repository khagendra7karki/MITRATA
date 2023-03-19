from src.lsm_tree import LSMTree

import json

SEGMENTS_DIRECTORY = 'segments/'
SEGMENT_BASENAME = 'LSMTree-1'
WAL_BASENAME = 'memtable_bkup'


CHAT_DIRECTORY = 'Chats/'
CHAT_BASENAME = 'CHAT-1'
CHAT_WAL_BASENAME = 'chat_memtable_bkup'


NOTIF_DIRECTORY = 'Notification/'
NOTIF_BASENAME = 'notif-1'
NOTIF_WAL_BASENAME = 'notif_memtable_bkup'

'''
converts the string to python dictionary sending it to backend API handler
'''

class Database():
    def __init__( self ):
        self.lsm = LSMTree(SEGMENT_BASENAME, SEGMENTS_DIRECTORY, WAL_BASENAME)
        self.lsm.set_threshold( 4 * 1000000 )                                   #setting the threshold to  4 MB
        self.lsm.set_sparsity_factor( 500000 )                                         #assuming the datas to be of 500 KB
        
        self.chat = LSMTree( CHAT_BASENAME, CHAT_DIRECTORY, CHAT_WAL_BASENAME  )
        self.chat.set_threshold( 2 * 1000000 )                                   #setting the threshold to  2 MB
        self.chat.set_sparsity_factor( 300000 )                                         #assuming the datas to be of 300 KB
       
        self.notif = LSMTree( NOTIF_BASENAME, NOTIF_DIRECTORY ,NOTIF_WAL_BASENAME)
        self.notif.set_threshold( 1000000 )
        self.notif.set_sparsity_factor( 300000 )
        # self.lsm.get_memtable()
        

    def create_new_user( self, key , value ):
        self.lsm.db_set( key, value )

    def get_user( self , key ):
        result = self.lsm.db_get( key )
        if result:
            return json.loads( result )
        return None
    
    #retrieve chat retrieves the chat data from the datbase and also loads the chat data into memory for faster access
    def retrieve_chat( self, key ):
        retrieval_result = self.chat.db_get( key )
        if retrieval_result:
            self.chat.db_set( key , retrieval_result )
            return json.loads(retrieval_result)
        return None
        
    def update_chat( self, key, fromUser ,   message ):
        chat_value = self.chat.db_get( key )
        chat_value = json.loads( chat_value )
        for chat in chat_value :
            if chat['email'] == fromUser:
                chat['text'].append( message )
                break
        self.chat.db_set( key, chat_value )
            

    #adds the given key to the friendlis of both the objects
    def add_friend( self, key1, key2, image1, image2, name1, name2 ):
        print( 'i am adding friend ')
        #adding friend follows up with deltetion of the notification 
        profile1 = self.chat.db_get( key1 )
        profile2 = self.chat.db_get( key2 )
        if profile1:
            json_profile1 = json.loads( profile1 )
            print( type( json_profile1 ) )
            json_profile1.append( { 'email': key2, 'name': name1, 'text': [{}] ,'image': image2 })
            self.chat.db_set( key1, json_profile1)

        else:
            self.chat.db_set( key1, json.dumps( { 'email': key2, 'name': name2, 'text': [{}] ,'image': image2 } ))
        if profile2: 
            json_profile2  = json.loads( profile2 )
            print( profile2) 
            json_profile2.append( { 'email': key1 ,'name': name1, 'text':[{}],'image': image1 })
            json_profile2.db_set( key2, json_profile2)
        else:
            self.chat.db_set( key2, json.dumps([{ 'email': key1 ,'name': name1, 'text':[{}],'image': image1 }]))

        self.delete_notif( key1, key2)
        

    def store_notif( self,key, value ):
        result = []
        search_result = self.notif.db_get( key )
        if 'text' in  value:
            print( value['text'])
        if search_result:
            search_result = json.loads( search_result )
            search_result.append( value )
            self.notif.db_set( key, json.dumps(search_result) )
            return
        result.append( value )

        self.notif.db_set( key, json.dumps( result ))
    
    def get_notif( self, key ):
        search_result = self.notif.db_get(key )
        if search_result:
            return json.loads(search_result)
        return None
    def delete_notif( self, from_key, key_to_delete ):
        final_result = [] 
        print( 'delete notification has been invoked')
        search_result = self.notif.db_get(from_key )
        if search_result:
            search_result= json.loads( search_result )
            for result in search_result:
                if result['email'] == key_to_delete:
                    print( key_to_delete )
                    continue
                final_result.append( result )
            self.notif.db_set( from_key, json.dumps(final_result) )
        return None


    def verify_user( self, key):
        result = self.lsm.db_get( key )
        if not result: 
            return None
        return json.loads( result )
    
    def get_random_data( self, gender,segment_index, last_suggestion, num ):
        '''returns an array of the random result
            size of the array is determined by num
        '''

        return (self.lsm.db_get_random( gender, segment_index, last_suggestion,num ))  
 
    