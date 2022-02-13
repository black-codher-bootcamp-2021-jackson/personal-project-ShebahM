import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Modal from "./Modal";
// import '../styles/Header.css';

const Header = (props) => {
    const {isLoggedIn, setIsLoggedIn, input, setInput} = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="nav">
            <div className="logo">
                <img src="" alt="logo" />
            </div>
            <div className="nav-style">
                <Link to="/" id="homelink"> Home </Link> |
                <Link to="/About" id="aboutlink"> About </Link> |
                <Link to="/Contact-Us" id="contactus"> Contact Us </Link>
            </div>
            
            {isLoggedIn ?
            <div className="username">
                <Link  to="/Profile"> Username </Link> |
                <Link  onClick={() => setIsLoggedIn(false)} to="/"> Log Out </Link>
            </div>
            :
            <div className="nav-buttons">
                <button onClick={() => setIsOpen(true)}>Login</button>
                <Link to="/SignUp"><button>Sign Up</button></Link>
            </div> }
            
            {isOpen ?
            <div className="overlay" >
                <div className="modal">
                    <Modal input={input} setInput={setInput} open={isOpen} onClose={() => setIsOpen(false)} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                </div>
            </div>
            : 
            null}
             
            {/* <div className="modal">
                
                    <p>This is the modal</p>
                </Modal> */}
            {/* </div> */}
            {/* <div className="menu">
                {isLoggedIn && (
                    <span>
                        <Link to="profile">{`✨ ${username} ✨`}</Link>
                    </span>
                )}
                <span onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? "Logout" : "Login"}
                </span>
            </div> */}
        </div>
        
    )
}

export default Header;