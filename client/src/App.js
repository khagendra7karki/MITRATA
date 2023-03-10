import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//routes
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Home from './routes/Home'
import UserFeed from './routes/UserFeed'
// import Chat from './routes/Chat'
import wss from './Utilities/frontendWebsocketInterface'
import FileUpload from './components/FileUpload'
import Swipe from './routes/Swipe'
import Photo from './routes/Photo'
import Chat from './components/Chat'
import { useState } from 'react';

const ws = wss.webSocketObject 
function App() {
  const [ user, setUser] = useState( {})
  return (<>
    <Router>
      <Routes>
        <Route index element = {<Home wsObject = { ws } setUser = { setUser }/>} />
        <Route path = '/login' element = { <Login wsObject = { ws } setUser = { setUser } /> } />
        <Route path = '/signup' element = { <SignUp wsObject = { ws }/> } />
        <Route path = '/user' element = { <UserFeed wsObject = { ws } user = { user } setUser = { setUser }/> } />
        <Route path = '/chat' element = { <Chat wsObject = { ws }/>  } />
        <Route path = '/swipe' element = { <Swipe wsObject = { ws }/>} /> 
        <Route path = '/upload' element = { <FileUpload wsObject = { ws } /> } />
        <Route path = '/photo' element = { <Photo wsObject = { ws } /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App;
