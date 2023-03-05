import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//routes
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Home from './routes/Home'
import UserFeed from './routes/UserFeed'
import Chat from './routes/Chat'
import wss from './Utilities/frontendWebsocketInterface'
import FileUpload from './components/FileUpload'
import Swipe from './routes/Swipe'
import Photo from './routes/Photo'

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
        <Route path = '/swipe' element = { <Swipe wsObject = { ws }/>} /> 
        <Route path = '/upload' element = { <FileUpload wsObject = { ws } /> } />
        <Route path = '/photo' element = { <Photo wsObject = { ws } /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App;
