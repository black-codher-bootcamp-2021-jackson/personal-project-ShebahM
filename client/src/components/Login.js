import React, {useState} from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

// login not working, routing to empty signup page
// TODO - route to profile page after login
//      - username to display in the top right-hand corner

const Login = (props) => {
    const {onClose, setIsLoggedIn, username, setUserName, show, handleClose} = props;
    
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

    if (!show) return null

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                    <label> Username </label>{' '}
                    <input onChange={e => setUserName(e.target.value)} type="text" name="username" value={username} placeholder="Username" required/><br />
                    <label> Password </label>{' '}
                    <input onChange={e => setPassword(e.target.value)} type="password" name="password" value={password} placeholder="Password" required />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <p>Need an Account?{' '}
                    <a href="/SignUp">Sign Up</a>
                    </p>
                    <Button variant="primary" type="submit" onClick={handleClose}>Login</Button>
                </Modal.Footer>
            </Modal>
        </>
        
    );
}

export default Login;