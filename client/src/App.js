import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Link, Route, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';

//routes
import SignUp from './routes/SignUp'
import Home from './routes/Home'
import UserFeed from './routes/UserFeed'
function App() {
  return (<>
    <Router>
      <Routes>
        <Route index element = {<Home />} />
        <Route path = '/signin' element = {<SignUp />} />
        <Route path = '/user' element = { <UserFeed />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
