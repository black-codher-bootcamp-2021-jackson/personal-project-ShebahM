import Header from "../components/Header"
import Footer from "../components/Footer"
import DataModal from "../components/DataModal"
import React, {useState} from "react"


const Profile = (props) => {
    const {isLoggedIn, setIsLoggedIn, username, setUserName, input, setInput} = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Header username={username} setUserName={setUserName} input={input} setInput={setInput} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <h1>{`${input.username}`}'s Profile</h1>
            <p>{`${input._id}`}</p>
            {console.log(input)}
            {console.log(input.healthdata)}
            {/* <Results />
            <DataLog /> */}

            {/* Data button */}
            <div className="data-button">
                <button onClick={() => setIsOpen(true)}>New Data</button>
            </div> 
            
            {isOpen ?
            <div className="overlay" >
                <div className="modal">
                    <DataModal open={isOpen} onClose={() => setIsOpen(false)} input={input} setInput={setInput} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                </div>
            </div>
            : 
            null}

            <Footer />
           
        </>
        
    );
}


export default Profile;