import websockets
import asyncio
import json

#custom database module
from database import Database

LEN = 0
PORT = 6969
connected = set()
print( 'Server is listening on port' + str( PORT ))
db = Database()
async def echo( websocket, path):
    global LEN
    connected.add( websocket )
    if( len( connected ) > LEN ):
        LEN = LEN + 1
        print( 'A client just connected ')
    try:
        async for message in websocket:
            message = json.loads( message )
            if(  message['task'] == 'create'):
                db.create_new_user( message['key'], str(message['value']) )
            print( 'Received message from the client ' + str(message) )
            for conn in connected:
                if conn != websocket:
                    await conn.send( str(message))
            await websocket.send( "Pong" + str(message) )

    except websockets.exceptions.ConnectionClosed as  e:
        print ( 'something went wrong')
        print ( e )
    finally:
        connected.remove( websocket )



start_server =  websockets.serve( echo, 'localhost', PORT )

asyncio.get_event_loop().run_until_complete( start_server )
asyncio.get_event_loop().run_forever()