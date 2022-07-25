import './App.css';
import About from './components/About';
import { AppBar } from './components/AppBar';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Testimonial from './components/Testimonial';

const App = () => {
    return ( 
        <div> 
            
                    <AppBar />
                    {/* <!-- Header Section Ends Here--> */}

                    {/* <!-- Banner Section Starts Here--> */}
                    <Banner />
                    {/* <!-- Banner Section Ends Here--> */}

                    {/* <!-- About Section Starts Here--> */}
                    <About />
                    {/* <!-- About Section Ends Here--> */}

                    {/* <!-- Services Section Starts Here--> */}
                    <Service />
                    {/* <!-- Services Section Ends Here--> */}

                    {/* <!-- Portfolio Section Starts Here--> */}
                    <Portfolio />
                    {/* <!-- Portfolio Section Ends Here--> */}

                    {/* <!-- Testimonials Section Starts Here--> */}
                    <Testimonial />
                    {/* <!-- Testimonials Section Ends Here--> */}

                    {/* <!-- Blog Section Starts Here--> */}
                    <Blog />
                    {/* <!-- Blog Section Ends Here--> */}

                    {/* <!-- Contact Section Starts Here--> */}
                    <Contact />
                    {/* <!-- Contact Section Ends Here--> */}

                    {/* <!--Copyright Area Starts Here--> */}
                    <Footer />
                    {/* <!--Copyright Area Ends Here--> */}
        </div>
    );
}

export default App;
