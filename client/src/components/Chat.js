import ChatBody from './chat/ChatBody'

const Chat = ({ display }) =>{
    if( display & 8 ){
        return <>
            <ChatBody />
        </>
    }
    return <>
     </>
}

export default Chat