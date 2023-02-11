import { useState } from 'react'


//form to take input text and submit
const MyForm = ({updateChat, sendMessage}) => {
    const [text, setText ] = useState({ id:0, content:''})
    const handleSubmit = (e) =>{
        e.preventDefault()
        updateChat(text)
        sendMessage( text )
        setText({id: Math.floor(Math.random() * 10000) + 1, content : ''})
    }
    const handleChange = (e) => {
        setText({ ...text, content: e.target.value})
    }
    
    return <>
        <form onSubmit = { handleSubmit }>
            <input value = { text.content }
                    onChange = { handleChange }
            />
            <button type = 'submit'>Submit</button>
        </form>
    </>
}

//messge commponent
const Message = ({message}) => {
    return <>
        <div key = {message.id}>{ message.content }</div>
    </>
}

//wraper component for messgaes
const ChatMessages = ({messages}) => {

    return <div>
                {messages.map( (message )=>{    
                    return  <Message key = { message.id } message = { message }/>
                })}
        </div>
}        
    
const Chat = ({sendMessage, wsObject}) =>{
    const [chat, setChat ] = useState( [] )
    const updateChat = (value) =>{
        setChat( [...chat, value])
    }
    wsObject.onmessage = ({data}) => { 
        data = JSON.parse( data )

        updateChat(data) 

    }
    return <>
        <h1> Hello World </h1>
        <ChatMessages messages = { chat }/>    
        <MyForm updateChat = { updateChat } sendMessage = { sendMessage }/>
    </>
}

export default Chat