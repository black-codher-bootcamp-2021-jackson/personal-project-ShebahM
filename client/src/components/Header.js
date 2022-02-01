import React from "react";
import { Link } from 'react-router-dom';
// import '../styles/Header.css';

const Header = (props) => {
    const {isLoggedIn, username, setIsLoggedIn} = props;
    return (
        <div className="nav">
            <Link to="/" id="homelink"> Home </Link> |
            <Link to="/About" id="aboutlink"> About </Link> |
            <Link to="/Contact-Us" id="contactus"> Contact Us </Link> 
            <div>
                <button>Sign Up</button>
                <button>Login</button>
            </div>
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