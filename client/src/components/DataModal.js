import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const DataModal = (props) => {
    const {open, onClose} = props;

    const [input, setInput] = useState({
        "bloodpressure": '',
        "bloodsugar": ''
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
        const newData = {
            bloodpressure: input.bloodpressure,
            bloodsugar: input.bloodsugar
        }
        console.log(newData)
        axios.post('http://localhost:8080/profile/data', newData)
    }


    if (!open) return null

    return (
        <>
            <button className="x-btn" onClick={onClose}>&times;</button>
            <h1>Input New Data</h1>
            <form onSubmit={() => onClose()}>
                <label> Blood Pressure </label>
                <input onChange={handleChange} value={input.bloodpressure} type="text" name="bloodpressure" placeholder="e.g. 120/80 mmHg"/>
                <label> Blood Sugar </label>
                <input onChange={handleChange} value={input.bloodsugar} type="text" name="bloodsugar" placeholder="e.g. 5.4 mmol/L" />
                <Link to="/Profile" ><button onClick={handleClick} type="submit">Save Data</button></Link>
            </form>
        </>
        
    );
}

export default DataModal;