import Services from '../../Shared/Services/Services';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <Header/>
            <Services/>
            <Testimonial/>
        </div>
    );
};

export default Home;