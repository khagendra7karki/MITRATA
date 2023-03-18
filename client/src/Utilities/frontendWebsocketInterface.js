class frontendWebsocketInterface{
    constructor(){
        this.webSocketObject = new WebSocket('ws://localhost:6969/chat')
        this.webSocketObject.onopen = () =>{
            console.log( 'Web Socket opened')
        }
    }
}
const wsObject = new frontendWebsocketInterface();
export default wsObject 