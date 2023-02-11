const fs = require('fs')


function writeData(data){
    fs.appendFile('database.dat', data, (err) => {
        if( err ) throw err;
        console.log( 'Data writen to database')
    })
}

module.exports = writeData