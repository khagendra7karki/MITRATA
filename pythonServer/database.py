from src.lsm_tree import LSMTree

import json

SEGMENTS_DIRECTORY = 'segments/'
SEGMENT_BASENAME = 'LSMTree-1'
WAL_BASENAME = 'memtable_bkup'

'''
converts the string to python dictionary sending it forward 
'''

class Database():
    def __init__( self ):
        self.lsm = LSMTree(SEGMENT_BASENAME, SEGMENTS_DIRECTORY, WAL_BASENAME)
        self.lsm.get_memtable()
        

    def create_new_user( self, key , value ):
        self.lsm.db_set( key, value )
    
    def get_user( self , key ):
        result = self.lsm.db_get( key )
        if not result:
            return None
        return json.loads( result )
    
    def _update_chat():
        pass
    def verify_user( self, key):
        result = self.lsm.db_get( key )
        if not result: 
            return None
        return json.loads( result )
    
    def get_random_data( self, gender, num ):
        '''returns a randomm value from the database
           returns a tuple of key and value
        '''
        return (self.lsm.db_get_random( gender, num ))  
 
    