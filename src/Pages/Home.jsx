import About from "./About";
import Banner from "./Banner";
import Extra from "./Extra";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Services from "./Services";


const Home = () => {
    return (
        <div className='max-w-8xl mx-auto '>
           <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Services></Services>
           <Footer></Footer>
        </div>
    );
};

export default Home;