import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Login from "./Login";
import Profile from "../pages/Profile";
import {ButtonGroup, Button, Navbar, Nav, Container} from "react-bootstrap";


const Header = (props) => {
    const {isLoggedIn, setIsLoggedIn, input, setInput} = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div >
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                    <img
                        src="/diabetes-icon.png"
                        width="50"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" id="homelink">Home</Nav.Link>
                        <Nav.Link href="/About" id="aboutlink">About</Nav.Link>
                        <Nav.Link href="/Contact-Us" id="contactus">Contact Us</Nav.Link>
                    </Nav>
                
                    {isLoggedIn ?
                    <div className="username">
                        <Link  to="/Profile"> {`${input.username}`} </Link> |
                        <Link  onClick={() => setIsLoggedIn(false)} to="/"> Log Out </Link>
                    </div>
                    :
                    <ButtonGroup className="nav-buttons">
                        <Button variant="outline-warning" onClick={handleShow}>Login</Button>
                        {/* <Link to="/SignUp"><Button>Sign Up</Button></Link> */}
                        <Button variant="outline-warning" href="/SignUp">Sign Up</Button>
                    </ButtonGroup> }
                </Container>
            </Navbar>
            
            
            {show ?
            <div className="overlay" >
                <div className="modal">
                    <Login show={show} onHide={handleClose}/>
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

// const Header = (props) => {
//     const {isLoggedIn, setIsLoggedIn, input, setInput} = props;

//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div >
            
//             <Container>
//                 <Navbar bg="primary" variant="dark">
//                 <Navbar.Brand href="/">
//                 <img
//                     src="/diabetes-icon.png"
//                     width="50"
//                     height="auto"
//                     className="d-inline-block align-top"
//                     alt="logo"
//                 />
//                 </Navbar.Brand>
//                 <Nav className="me-auto">
//                     <Nav.Link href="/" id="homelink">Home</Nav.Link>
//                     <Nav.Link href="/About" id="aboutlink">About</Nav.Link>
//                     <Nav.Link href="/Contact-Us" id="contactus">Contact Us</Nav.Link>
//                 </Nav>
            
//                 {isLoggedIn ?
//                 <div className="username">
//                     <Link  to="/Profile"> {`${input.username}`} </Link> |
//                     <Link  onClick={() => setIsLoggedIn(false)} to="/"> Log Out </Link>
//                 </div>
//                 :
//                 <ButtonGroup className="nav-buttons">
//                     <Button variant="outline-warning" onClick={() => setIsOpen(true)}>Login</Button>
//                     {/* <Link to="/SignUp"><Button>Sign Up</Button></Link> */}
//                     <Button variant="outline-warning" href="/SignUp">Sign Up</Button>
//                 </ButtonGroup> }
//                 </Navbar>
//             </Container>
            
//             {isOpen ?
//             <div className="overlay" >
//                 <div className="modal">
//                     <Modal input={input} setInput={setInput} open={isOpen} onClose={() => setIsOpen(false)} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
//                 </div>
//             </div>
//             : 
//             null}