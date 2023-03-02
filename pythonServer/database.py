from src.lsm_tree import LSMTree


SEGMENTS_DIRECTORY = 'segments/'
SEGMENT_BASENAME = 'LSMTree-1'
WAL_BASENAME = 'memtable_bkup'

class Database():
    def __init__( self ):
        self.lsm = LSMTree(SEGMENT_BASENAME, SEGMENTS_DIRECTORY, WAL_BASENAME)
        

    def create_new_user( self, key , value ):
        print( type( self.lsm))
        self.lsm.db_set( key, value )
    
    def get_user( self , key ):
        self.lsm.db_get( key )
    def _update_chat():
        pass
    def verify_user( self, key):
        if(self.lsm.db_get( key )):
            return True
        return False