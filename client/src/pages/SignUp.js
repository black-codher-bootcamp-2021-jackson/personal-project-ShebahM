import Header from "../components/Header"
import Footer from "../components/Footer"
import React from "react";
import {Navigate} from "react-router-dom";
import axios from "axios";
import { Container, Button } from "react-bootstrap";

const SignUp = (props) => {
    const {username, setUserName, isLoggedIn, setIsLoggedIn, input, setInput} = props;
    
    // Make it async. Tell my backend to tell me if this new profile has been added to the database

    const handleClick = async e => {
        e.preventDefault();
        const newProfile = {
            username: input.username,
            firstname: input.firstname,
            lastname: input.lastname,
            email: input.email,
            password: input.password
        }
        
        const response = await axios.post('http://localhost:8080/register', newProfile)
        setIsLoggedIn(true)
        setInput(response.data);
    };
    
    function handleChange(e) {
        const {name, value} = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    return (
        <>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Container>
                <h1>Sign Up</h1>
                <form onSubmit={handleClick}>
                    <label> Username </label>{' '}
                    <input onChange={handleChange} type="text" name="username" value={input.username} placeholder="Username" />
                    <br></br>
                    <label> First Name </label>{' '}
                    <input onChange={handleChange} type="text" name="firstname" value={input.firstname} placeholder="First Name" />
                    <br></br>
                    <label> Last Name </label>{' '}
                    <input onChange={handleChange} type="text" name="lastname" placeholder="Last Name" value={input.lastname} />
                    <br></br>
                    <label> Email </label>{' '}
                    <input onChange={handleChange} type="text" name="email" placeholder="Email" value={input.email} />
                    <br></br>
                    <label> Password </label>{' '}
                    <input onChange={handleChange} type="password" name="password" placeholder="Password" value={input.password} />{' '}
                    <Button type="submit" > Submit </Button>
                </form>
                {isLoggedIn && <Navigate to="/Profile"/>}
            </Container>
            <Footer />
           
        </>
        
    );
}


export default SignUp;