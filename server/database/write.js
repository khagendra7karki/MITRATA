const fs = require('fs')


function writeData(data){
    fs.writeFile('database.dat', data, (err) => {
        console.log( typeof(data))
        if( err ) throw err;
        console.log( 'Data writen to database')
    })
}

module.exports = writeData