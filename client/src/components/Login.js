import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";
import { Modal } from "react-bootstrap";

// login not working, routing to empty signup page
// TODO - route to profile page after login
//      - username to display in the top right-hand corner

const Login = (props) => {
    const {open, onClose, isLoggedIn, setIsLoggedIn, username, setUserName} = props;
    
    const [password, setPassword] = useState();

    // const [input, setInput] = useState({
    //     "username": '',
    //     "password": ''
    // })

    // function handleChange(e) {
    //     const {name, value} = e.target;

    //     setInput(prevInput => {
    //         return {
    //             ...prevInput,
    //             [name]: value
    //         }
    //     })
    // }

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = loginUser ({
    //         username,
    //         password
    //     });
    //     setToken(token);
    //     setIsLoggedIn(true);
    //     onClose();
    // }

    const handleSubmit = async e => {
        e.preventDefault();
        const newLogin = {
            username: username,
            password: password
        };
        console.log(newLogin)
        axios.get('http://localhost:8080/login', newLogin)
        setIsLoggedIn(true);
        onClose();
    }
    

    // function handleChange(e) {
    //     const {name, value} = e.target;

    //     setInput(prevInput => {
    //         return {
    //             ...prevInput,
    //             [name]: value
    //         }
    //     })
    // }

    if (!open) return null

    return (
        <>
            <Modal ></Modal>
        </>
        
    );
}

export default Login;

{/* <button className="x-btn" onClick={onClose}>&times;</button>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label> Username </label>
                <input onChange={e => setUserName(e.target.value)} type="text" name="username" value={username} placeholder="Username" required/>
                <label> Password </label>
                <input onChange={e => setPassword(e.target.value)} type="password" name="password" value={password} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p>Need an Account?<br />
            <a href="#">Sign Up</a>
            </p>
            {isLoggedIn && <Navigate to="/Profile" />} */}

            // const {open, onClose, isLoggedIn, setIsLoggedIn, username, setUserName} = props;