import React from "react";
import {Link} from "react-router-dom";

const DataModal = (props) => {
    const {open, onClose} = props;
    if (!open) return null

    return (
        <>
            <button className="x-btn" onClick={onClose}>&times;</button>
            <h1>Input New Data</h1>
            <form onSubmit={() => onClose()}>
                <label> Blood Pressure </label>
                <input type="text" name="username" placeholder="Username"/>
                <label> Blood Sugar </label>
                <input type="password" name="password" placeholder="Password" />
                <Link to="/Profile" ><button type="submit">Save Data</button></Link>
            </form>
        </>
        
    );
}

export default DataModal;