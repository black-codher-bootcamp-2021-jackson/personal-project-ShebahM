import Header from "../components/Header"
import Footer from "../components/Footer"
import DataModal from "../components/DataModal"
import DataCard from "../components/DataCard"
import React, {useState} from "react"
import { Button, Container } from "react-bootstrap"

const Profile = (props) => {
    const {isLoggedIn, setIsLoggedIn, username, setUserName, input, setInput} = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header username={username} setUserName={setUserName} input={input} setInput={setInput} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Container>
                <br />
                <h1>{`${input.username}`}'s Profile</h1>
                <p>{`${input._id}`}</p>
                {console.log(input)}
                {console.log(input.healthdata)}
                {/* <Results />
                <DataLog /> */}

                {/* Data button */}
                <div className="data-button">
                    <Button onClick={handleShow}>Add New Data</Button>
                </div> 
                
                {show ?
                <div className="overlay" >
                    <div className="modal">
                        <DataModal show={show} handleClose={handleClose} input={input} setInput={setInput} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                    </div>
                </div>
                : 
                null}
                <br />
                <DataCard/>
                <br />
                <DataCard/>
            </Container>
            <Footer />
           
        </>
        
    );
}


export default Profile;