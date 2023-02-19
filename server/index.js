const writeData = require('./write.js')
const http = require('http')
const WebSocket = require('ws')
const express = require('express')


const  PORT = 6969
const server = http.createServer( express )
const wss = new WebSocket.Server({ server })


wss.on( 'connection', (ws) =>{
    ws.on('message', (data, isBinary) =>{
        console.log( data )
        let temp = data.toString('utf-8')
        if( JSON.parse(temp).task == 'write'){
            writeData( data )
        }
        wss.clients.forEach((client) =>{
            if( client != ws && client.readyState == WebSocket.OPEN  ){
                client.send(data, { binary: isBinary})
            } 
        })
    })
})

server.listen( PORT , () =>{
    console.log(`Server is running on ${PORT}`)
})