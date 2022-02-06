import Header from "../components/Header";
import Footer from "../components/Footer";

const About = (props) => {
    return (
        <>
            <Header />
            <h1>About Us</h1>
            <p>A diabetes data logger, that allows a user to store their medical information, such as blood sugar level and blood pressure.</p>
            <Footer />
        </>
        
    );
}

export default About;