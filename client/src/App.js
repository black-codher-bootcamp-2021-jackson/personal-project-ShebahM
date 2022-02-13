import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import {getAllProfiles} from "./services/profileService";


// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profiles, setProfiles] = useState(null);
  const [username, setUserName] = useState();
  const [input, setInput] = useState({
    "username": '',
    "firstname": '',
    "lastname": '',
    "email": '',
    "password": ''
})

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles])

  // if(!token) {
  //   return <Modal setToken={setToken} />
  // }

  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home username={username} setUserName={setUserName} input={input} setInput={setInput} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact-Us" element={<Contact />} />
      <Route path="/SignUp" element={<SignUp input={input} setInput={setInput} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/Profile" element={<Profile profiles={profiles} setProfiles={setProfiles} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  </Router>
  );
}

export default App;
