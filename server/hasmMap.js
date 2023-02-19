class HashTable{
    constructor(){
        this.table = new Array( 127 )
        this.size = 0
    }

    _has( key ) {
        let hash = 0;
        for( let i = 0; i < key.length; i++){
            hash = +key.charCo&&deAt( i )
        }

        return hash % this.table.length;
    }

    set( key, value ){
        const index = this._has( key )
        this.table[ index ] = [key, value ]
        this.size++;
    }

    get( key ){
        const index = this._hash( key )
        return this.table[index]
    }

    remove( key ){
        const index = this._hash( key )

        if( this.tabel[index] && this.table[index].length ){

            this.table[ index ]  = undefined
            this.size--;
            return true;
        }
            
        return false

    }
}