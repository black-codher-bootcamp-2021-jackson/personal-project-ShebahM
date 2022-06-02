import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const DataModal = (props) => {
    const {show, handleClose} = props;

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


    if (!show) return null

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleClick}>
                        <label> Blood Pressure </label>{' '}
                        <input onChange={handleChange} value={input.bloodpressure} type="text" name="bloodpressure" placeholder="e.g. 120/80 mmHg"/><br />
                        <label> Blood Sugar </label>{' '}
                        <input onChange={handleChange} value={input.bloodsugar} type="text" name="bloodsugar" placeholder="e.g. 5.4 mmol/L" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleClose}>Save Data</Button>
                </Modal.Footer>
            </Modal>
        </>
        
    );
}

export default DataModal;