const http = require('http')
const WebSocket = require('ws')
const express = require('express')


const  PORT = 6969

const server = http.createServer( express )
const wss = new WebSocket.Server({ server })


wss.on( 'connection', (ws) =>{
    ws.on('message', (data, isBinary) =>{
        console.log( isBinary )
        const message = isBinary ?data.toString() :  data
        console.log(message)
        wss.clients.forEach((client) =>{
            if( client != ws && client.readyState == WebSocket.OPEN  ){
                client.send(message, { binary: isBinary})
            } 
        })
    })
})

server.listen( PORT , () =>{
    console.log(`Server is running on ${PORT}`)
})