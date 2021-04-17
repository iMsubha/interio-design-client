import Services from '../../Shared/Services/Services';
import Header from '../Header/Header';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div id="home">
            <Header/>
            <h1>Home</h1>
            <Services/>
            <Testimonial/>
        </div>
    );
};

export default Home;