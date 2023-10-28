import Banner from "./Banner";
import Extra from "./Extra";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className='max-w-8xl mx-auto '>
           <Navbar></Navbar>
            <Banner></Banner>
           <Footer></Footer>
        </div>
    );
};

export default Home;