import React from "react";
import {Link} from "react-router-dom";

const Modal = (props) => {
    const {open, onClose, setIsLoggedIn} = props;
    if (!open) return null

    return (
        <>
            <button className="x-btn" onClick={onClose}>&times;</button>
            <h1>This is the modal</h1>
            <form onSubmit={() => onClose()}>
                <label> Username </label>
                <input type="text" name="username" placeholder="Username"/>
                <label> Password </label>
                <input type="password" name="password" placeholder="Password" />
                <Link to="/Profile" ><button onClick={() => {onClose(); setIsLoggedIn(true)}} type="submit">Login</button></Link>
            </form>
        </>
        
    );
}

export default Modal;