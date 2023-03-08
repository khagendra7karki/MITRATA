import { useState } from 'react'


const sampleChatObject = {
    received: [{key:  [{message: '', time: ''}] }],
    sent: [ { key: [ { message: '', time: ''}]}],

}


//returns the date in YYYYMMDDHHMMSS format
const getTime = () =>{
    var today = new Date();
    var year = today.getFullYear()
    var month = today.getMonth()+1
    var day = today.getDate()     
    var hour = today.getHours()
    var minute = today.getMinutes()
    var second = today.getSeconds()
    var date = ''
    date = date + year
    console.log( date )
    if( month < 10)
        date +='0' + month
    else    
        date +=month
    console.log( date )
    if( day < 10)
        date +='0' + day
    else
        date += day
    console.log( date )
    if( hour < 10)
        date += '0' + hour
    else
        date+= hour
    console.log( date )
    if( minute < 10)
        date += '0' + minute
    else    
        date += minute
    console.log( date )
    if( second < 10)
        date += '0' + second
    else    
        date += second
    return date    
}
const converMessage = ( key, message ) =>{
    let convertedMessage 
    convertedMessage = { message: '', time: '' }
}
const sendMessage = ( message ) => {

}

const receiveMessage = () =>{

}
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
    
const Chat = ({ wsObject}) =>{
    const [chat, setChat ] = useState( [] )
    const updateChat = (value) =>{
        setChat( [...chat, value])
    }
    wsObject.onmessage = ({data}) => { 
        data = JSON.parse( data )
        updateChat(data) 
    }

    const sendMessage = (message) =>{
        wsObject.send(JSON.stringify(message))
    }
    return <>
        <h1> Hello World </h1>
        <ChatMessages messages = { chat }/>    
        <MyForm updateChat = { updateChat } sendMessage = { sendMessage }/>
    </>
}

export default Chat