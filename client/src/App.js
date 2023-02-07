import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';

//routes
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import Home from './routes/Home'
import UserFeed from './routes/UserFeed'
import Chat from './routes/Chat'



function App() {
  return (<>
    <Router>
      <Routes>
        <Route index element = {<Home />} />
        <Route path = '/signin' element = { <Login /> } />
        <Route path = '/signup' element = { <SignUp /> } />
        <Route path = '/user' element = { <UserFeed /> } />
        <Route path  = '/chat' element = { <Chat  />  } />
      </Routes>
    </Router>
    </>
  )
}

export default App;
