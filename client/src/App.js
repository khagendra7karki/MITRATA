import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//routes
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Home from './routes/Home'
import UserFeed from './routes/UserFeed'
import Chat from './routes/Chat'
import Swipe from './routes/Swipe'
import wss from './Utilities/frontendWebsocketInterface'
import FileUpload from './routes/FileUpload'

const ws = wss.webSocketObject 
function App() {
  return (<>
    <Router>
      <Routes>
        <Route index element = {<Home wsObject = { ws }/>} />
        <Route path = '/login' element = { <Login wsObject = { ws }/> } />
        <Route path = '/signup' element = { <SignUp wsObject = { ws }/> } />
        <Route path = '/user' element = { <UserFeed /> } />
        <Route path = '/chat' element = { <Chat wsObject = { ws }/>  } />
        <Route path = '/swipe' element = { <Swipe />} />
        <Route path = '/upload' element = { <FileUpload /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App;
