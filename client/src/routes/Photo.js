import { useState } from 'react'
import Alexandria from '../assets/images/alexandria_daddario.jpg'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
const Photo = ({ wsObject }) =>{
    const sendMessage = () =>{
        wsObject.send( JSON.stringify({'task': 'photo'}))
    }
    const [ url , setURL ] = useState( Alexandria )
    wsObject.onmessage = async ({data}) =>{
        data = JSON.parse( data )
        // console.log( data[0] )
        // console.log( data[0] )
        const base64Response = await fetch(data[0].data)
        let temp = await base64Response.blob()
        console.log(temp)
        temp = window.URL.createObjectURL( temp )
        setURL( temp )
        console.log( temp )
    }
    return <>
        <h2>Hello I display Pictures.</h2>
        <img src = { url } />
        <button onClick = { sendMessage }> SendMesage</button>
    </>
}

export default Photo