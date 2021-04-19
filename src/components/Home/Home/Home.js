import Services from '../../Shared/Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';
const Home = () => {
    return (
        <div id="home">
            <Header/>
            <Services/>
            <Testimonial/>
            <Team/>
            <Contact/>
            <Footer/>
            
        </div>
    );
};

export default Home;