from src.lsm_tree import LSMTree


SEGMENTS_DIRECTORY = 'segments/'
SEGMENT_BASENAME = 'LSMTree-1'
WAL_BASENAME = 'memtable_bkup'

class DATABASE():
    def __int__( self ):
        self.lsm = LSMTree(SEGMENT_BASENAME, SEGMENTS_DIRECTORY, WAL_BASENAME)
        

    def _create_new_user( self, key , value ):
        self.lsm.db_set( key, value )
    
    def _get_user( self , key ):
        self.lsm.db_get_key( key )
    def _update_chat():
        pass
    def _verify_user():
        pass