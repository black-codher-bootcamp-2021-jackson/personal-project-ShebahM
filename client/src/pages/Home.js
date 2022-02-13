import Header from "../components/Header"
import Footer from "../components/Footer"
import { set } from "mongoose";

const Home = (props) => {
    const {isLoggedIn, setIsLoggedIn, input, setInput, username, setUserName} = props;
    return (
        <>
            <Header username={username} setUserName={setUserName} input={input} setInput={setInput} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <h1>Diabetes Logger</h1>
            <h3>Diabetes is a lifelong condition that causes a person's blood sugar level to become too high.</h3>
            <p>Keeping track of your blood pressure and blood sugar can be a nuisance. Use this diabetes logger to keep all your information in one safe place.</p>
            <Footer />
           
        </>
        
    );
}

export default Home;