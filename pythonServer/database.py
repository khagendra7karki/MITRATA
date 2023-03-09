from src.lsm_tree import LSMTree

import json

SEGMENTS_DIRECTORY = 'segments/'
SEGMENT_BASENAME = 'LSMTree-1'
WAL_BASENAME = 'memtable_bkup'


CHAT_DIRECTORY = 'Chats/'
CHAT_BASENAME = 'CHAT-1'
CHAT_WAL_BASENAME = 'chat_memtable_bkup'
'''
converts the string to python dictionary sending it to backend API handler
'''

class Database():
    def __init__( self ):
        self.lsm = LSMTree(SEGMENT_BASENAME, SEGMENTS_DIRECTORY, WAL_BASENAME)
        self.lsm.set_threshold( 4 * 1000000 )                                   #setting the threshold to  4 MB
        self.lsm.set_sparsity_factor( 500000 )                                         #assuming the datas to be of 500 KB
        self.chat = LSMTree( CHAT_BASENAME, CHAT_DIRECTORY, CHAT_WAL_BASENAME  )
        self.lsm.set_threshold( 2 * 1000000 )                                   #setting the threshold to  2 MB
        self.lsm.set_sparsity_factor( 300000 )                                         #assuming the datas to be of 300 KB
        # self.lsm.get_memtable()
        

    def create_new_user( self, key , value ):
        self.lsm.db_set( key, value )
    
    def get_user( self , key ):
        result = self.lsm.db_get( key )
        if not result:
            return None
        return json.loads( result )
    
    def store_chat( self, key, chat ):
        pass
    def store_notif( self, key , notif ):
        pass
    def retrieve_chat_notif( ):

        pass
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
 
    