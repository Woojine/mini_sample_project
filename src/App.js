import SignUp from './pages/SignUp';
import './App.css';
import Login from './pages/Login';
import MemberUpdate from './pages/MemberUpdate';
import FindId from './component/FindId';
import FindPw from './component/FindPw';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from './pages/Event';

function App() {
  return (
   
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        <Route path="/Event" element={<Event />} />
        </Routes>
      </Router>
  );
}

export default App;
