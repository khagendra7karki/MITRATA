import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//routes
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Home from './routes/Home'
import UserFeed from './routes/UserFeed'
<<<<<<< HEAD
// import Chat from './routes/Chat'
=======

>>>>>>> 761c23820aeaa92924ccd06cf17f74a6f3200b6e
import wss from './Utilities/frontendWebsocketInterface'
import FileUpload from './components/FileUpload'
import Swipe from './routes/Swipe'
import Photo from './routes/Photo'
import Chat from './components/Chat'
import { useState } from 'react';
import socketIO from "socket.io-client"
const socket = socketIO.connect("http://localhost:4000")

const ws = wss.webSocketObject 
function App() {
  const [ user, setUser] = useState( {})
  return (<>
    <Router>
      <Routes>
        {/* <Route index element = {<Home wsObject = { ws } setUser = { setUser } socket={socket} />}  /> */}
        <Route path = '/' element = { <Login wsObject = { ws } setUser = { setUser } socket={socket}/> } />
        <Route path = '/signup' element = { <SignUp wsObject = { ws }/> } />
        <Route path = '/user' element = { <UserFeed wsObject = { ws } user = { user } setUser = { setUser } socket={socket}/> } />
        
        <Route path = '/swipe' element = { <Swipe wsObject = { ws }/>} /> 
        <Route path = '/upload' element = { <FileUpload wsObject = { ws } /> } />
        <Route path = '/photo' element = { <Photo wsObject = { ws } /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App;
