import React, { useState } from 'react'
import './components/login.css'
import SignIn from './components/SignIn/SignIn.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import Home from './components/Home/Home.js'
import Interview from './components/Interview/Interview'
import Unauthorized from './components/unauthorized/Unauthorized'
import Navbar from './components/Navbar/Navbar.js'
import Profile from './components/Profile/Profile.jsx'
import QuestionForm from './components/QuestionForm/QuestionForm.jsx'
import Problemset from './components/Problemset/Problemset'
import ProblemPage from './components/ProblemPage/ProblemPage'
import Ide from './components/ide/Ide'
import Join from './components/JoinPage/Join'
import Room from './components/Room/Room'
import Error404 from './components/Error/Error404';
import Leaderboard from './components/Leaderboard/Leaderboard'
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {

  const [user, setLoginUser] = useState({});
  const [interview, setInterview] = useState(true);

  return (
    <>
      <Router>
        {
          (user && user._id) && interview ? <Navbar user={user} setLoginUser={setLoginUser} /> : <></>
        }
        <Routes>
          <Route exact path="/login" element={<SignIn setLoginUser={setLoginUser} />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/" element={
            user && user._id ? <Home user={user} setInterview={setInterview} setLoginUser={setLoginUser} /> : <SignIn setLoginUser={setLoginUser} />
          } />
          <Route exact path="/interview" element={
            user && user._id ? <Interview /> : <SignIn setLoginUser={setLoginUser} />
          } />
          <Route path="/profile/:id" element={<Profile user={user} />} />
          <Route path="/questionUpload" element={<QuestionForm user={user} />} />
          <Route exact path="/problemset" element={<Problemset user={user} />} />
          <Route exact path="/problemPage/:id" element={<ProblemPage user={user} />} />
          <Route exact path="/ide" element={<Ide user={user} />} />
          <Route exact path="/join" element={<Join user={user} />} />
          <Route exact path="/leaderboard" element={<Leaderboard user={user} />} />
          <Route exact path="/room/:id" element={<Room setInterview={setInterview} user={user} />} />
          <Route exact path='/unauthorized' element={<Unauthorized />} />
          <Route path='*' element={<Error404 setInterview={setInterview} />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;