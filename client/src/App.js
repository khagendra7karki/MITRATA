import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';

//routes
import Login from './routes/Login'
import SignUp from './routes/SignUp'

import UserFeed from './routes/UserFeed'

import Swipe from './routes/Swipe'
import socketIO from "socket.io-client"
const socket = socketIO.connect("http://localhost:4000")
function App() {
  return (<>
    <Router>
      <Routes>
        {/* <Route index element = {<Home />} /> */}
        <Route path = '/' element = { <Login socket={socket}/> } />
        <Route path = '/signup' element = { <SignUp /> } />
        <Route path = '/user' element = { <UserFeed socket={socket}/> } />
        <Route path = '/swipe' element = { <Swipe /> } />
        
      </Routes>
    </Router>
    </>
  )
}

export default App;
