import React, {useState} from 'react'
import LockIn from './pages/dashboard/settask'
import FocusGame from './pages/game'
import Header from './reusable_components/header/header'
import Footer from './reusable_components/footer/footer'
import {Route, Routes, Router } from 'react-router'
import HomePage from './pages/homepage'
import LoginPage from './pages/login/login'
import SignupPage from './pages/signup/signup'
import Dashboard from './pages/dashboard/settask'
import './app.css'
import SetTask from './pages/dashboard/SetTasks'

const App = () => {
  const [user, setUser] = useState(null); 
  const [newUser, setNewUser] = useState(null); 

  const handleSignup = (signedUpUser) => {
    setNewUser (signedUpUser) ; 
    localStorage.setItem("signedUpUser", JSON.stringify(signedUpUser));
  }

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser); // Set the logged-in user
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser)); // Store the user in localStorage
  };

  return (
    <div className = 'app'>
      <Header />

      <Routes >
        <Route path='/' element = {<HomePage />} />
        <Route path = '/focusgame' element = {<FocusGame />} />
        <Route path = '/settask' element = {<LockIn />} />
        <Route path = '/login' element = {<LoginPage onLogin = {handleLogin}/>} />
        <Route path = '/signup' element = {<SignupPage onSignup = {handleSignup}/>} />
        <Route path = '/dashboard' element = {<Dashboard user = {newUser}/>} >
            <Route path="/dashboard/overview" element={<Dashboard />} />
            <Route path="/dashboard/set-task" element={<SetTask />} />
        </Route>
      </Routes>
        <Footer />
    </div>
  )
}

export default App