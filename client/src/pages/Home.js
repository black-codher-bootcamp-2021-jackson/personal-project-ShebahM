import Header from "../components/Header"
import Footer from "../components/Footer"

const Home = (props) => {
    const {isLoggedIn, setIsLoggedIn} = props;
    return (
        <>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <h1>Diabetes Logger</h1>
            <h3>Diabetes is a lifelong condition that causes a person's blood sugar level to become too high.</h3>
            <p>Keeping track of your blood pressure and blood sugar can be a nuisance. Use this diabetes logger to keep all your information in one safe place.</p>
            <Footer />
           
        </>
        
    );
}

export default Home;