import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';

//routes
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Home from './routes/Home'
import UserFeed from './routes/UserFeed'
import Chat from './routes/Chat'


let ws
    if( ws ) {
        ws.onopen = ws.onclose = ws.onmessage = null
        ws.close()
    }
    ws = new WebSocket('ws://localhost:6969')
    ws.onopen = () => {
        console.log('Connection opened')
    }
    
    ws.onclose = () => {ws = null}
    ws.onmessage = ({data}) => {return ( data )}
    
    const sendMessage = (message) => {
        console.log( message )
        ws.send(JSON.stringify(message))
    }

function App() {
  return (<>
    <Router>
      <Routes>
        <Route index element = {<Home />} />
        <Route path = '/signin' element = { <Login /> } />
        <Route path = '/signup' element = { <SignUp /> } />
        <Route path = '/user' element = { <UserFeed /> } />
        <Route path  = '/chat' element = { <Chat sendMessage = { sendMessage } wsObject = { ws } />  } />
      </Routes>
    </Router>
    </>
  )
}

export default App;
