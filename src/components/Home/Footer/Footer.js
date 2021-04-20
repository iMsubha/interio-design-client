import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
    const ourAddress = [
        {name: "Dhanmondi, 1205 Dhaka" , link: "//google.com/map"}
    ]
    const company = [
        {name: "About" , link: "/about"},
        {name: "Project" , link: "/project"},
        {name: "Our team" , link: "/our-team"},
        {name: "Terms Condition" , link: "/terms-ondition"},
        {name: "Terms Condition" , link: "/terms-condition"},
        {name: "Terms Condition" , link: "/terms-condition"},
    ]
    const services = [
        {name: "Bedroom design" , link: "/Bedroom-design"},
        {name: "Kitchen Cabinet install and repair" , link: "/repair"},
        {name: "3Ds Max render" , link: "/render"},
        {name: "3Ds Max render" , link: "/render"},
        {name: "3Ds Max render" , link: "/render"},
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={2} menuTitle="Company" menuItems={company}/>
                    <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;