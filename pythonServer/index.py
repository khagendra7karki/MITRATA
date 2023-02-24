import websockets
import asyncio

PORT = 6969
connected = set()
print( 'Server is listening on port' + str( PORT ))

async def echo( websocket, path):
    print( 'A client just connected ')
    connected.add( websocket )
    try:
        async for message in websocket:
            print( 'Received message from the client ' + message )
            for conn in connected:
                if conn != websocket:
                    await conn.send( message)
            await websocket.send( "Pong" + message )

    except websockets.exceptions.ConnectionClosed as  e:
        print ( 'something went wrong')
        print ( e )
    finally:
        connected.remove( websocket )



start_server =  websockets.serve( echo, 'localhost', PORT )

asyncio.get_event_loop().run_until_complete( start_server )
asyncio.get_event_loop().run_forever()