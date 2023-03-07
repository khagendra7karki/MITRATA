class frontendWebsocketInterface{
    constructor(){
        this.webSocketObject = new WebSocket('ws://localhost:6969/chat')
        this.webSocketObject.onopen = () =>{
            console.log( 'Web Socket opened')
        }
    }
    sendMessage( message ){
        message = JSON.stringify( message )
        this.webSocketObject.send( message )
    }

    onMessage( callback ) {
        wsObject.onmessage = ({ data })=>{
            callback( data )
        } 
    }
}
const wsObject = new frontendWebsocketInterface();
export default wsObject 