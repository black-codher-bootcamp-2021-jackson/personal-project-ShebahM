import Header from "../components/Header"
import Footer from "../components/Footer"
import React, {useState} from "react";
import axios from "axios";

const SignUp = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;
    const [input, setInput] = useState({
        "username": '',
        "firstname": '',
        "lastname": '',
        "email": '',
        "password": ''
    })

    function handleChange(e) {
        const {name, value} = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault();
        const newProfile = {
            firstname: input.firstname,
            lastname: input.lastname,
            email: input.email,
            password: input.password
        }
        
        axios.post('http://localhost:8080/profile', newProfile)
    }

    return (
        <>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <h1>Sign Up</h1>
            <form onSubmit={() => setIsLoggedIn(true)}>
                <label> Username </label>
                <input onChange={handleChange} type="text" name="username" value={input.username} placeholder="Username" />
                <br></br>
                <label> First Name </label>
                <input onChange={handleChange} type="text" name="firstname" value={input.firstname} placeholder="First Name" />
                <br></br>
                <label> Last Name </label>
                <input onChange={handleChange} type="text" name="lastname" placeholder="Last Name" value={input.lastname} />
                <br></br>
                <label> Email </label>
                <input onChange={handleChange} type="text" name="email" placeholder="Email" value={input.email} />
                <br></br>
                <label> Password </label>
                <input onChange={handleChange} type="text" name="password" placeholder="Password" value={input.password} />
                <button onClick={handleClick} type="submit" > Submit </button>
            </form>
            <Footer />
           
        </>
        
    );
}


export default SignUp;