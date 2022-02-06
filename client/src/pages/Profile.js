import Header from "../components/Header"
import Footer from "../components/Footer"
// import DataLog from "../components/DataLog"
// import Results from "../components/Results"
import DataModal from "../components/DataModal"
import React, {useState} from "react"



const Profile = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <h1>My Profile</h1>
            {/* <Results />
            <DataLog /> */}
            <div className="data-button">
                <button onClick={() => setIsOpen(true)}>New Data</button>
            </div> 
            
            {isOpen ?
            <div className="overlay" >
                <div className="modal">
                    <DataModal open={isOpen} onClose={() => setIsOpen(false)}/>
                </div>
            </div>
            : 
            null}
            <Footer />
           
        </>
        
    );
}


export default Profile;