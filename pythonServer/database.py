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
    
    def retrieve_chat( self, key ):
        pass
    
    def update_chat( self, key ):
        pass
    #adds the given key to the friendlis of both the objects
    def add_friend( self, key1, key2, image1, image2 ):
        profile1 = (self.chat.db_get( key1 ))
        profile2 = (self.chat.db_get( key2 ))
        if profile1:
            profile1 = profile1.json.loads( profile1 )
            profile1.append( { key2 :[{}],'image': image2 })
        else:
            self.chat.db_set( key1, json.dumps([{ key2 :[{}],'image': image2 }]))
        if profile2: 
            profile2  = json.loads( profile2 )
            profile2.append( { key1 :[{}],'image': image1 })
        else:
            self.chat.db_set( key2, json.dumps([{ key1 :[{}],'image': image1 }]))

        
        pass

    def store_notif( self,key, value ):
        result = []
        search_result = self.notif.db_get( key )
        if search_result:
            search_result = json.loads( search_result )
            result.append( search_result )
            self.notif.db_set( key, json.dumps(result) )
            return
        result.append( value )
        # print( type(result) )
        self.notif.db_set( key, json.dumps( result ))
    
    def get_notif( self, key ):
        search_result = self.notif.db_get(key )
        if search_result:
            return json.loads(search_result)
        return None
    def delete_notif( self, key, value ):
        final_result = [] 
        search_result = self.notif.db_get( key )
        if search_result:
            for result in search_result:
                if result[0: 200] == value[ 0: 200]:
                    continue
                final_result.append( result )
            self.notif.db_set( key, final_result )
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
 
    