import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import fbImage from '../../../icons/facebook.png';
import githubImage from '../../../icons/github.png';
import instagramImage from '../../../icons/instagram.png';
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      
        <h1 className="section-header">CONTACT</h1>
       <div className="d-flex justify-content-center align-item-center">
       <div  className="d-flex">
          <form className="d-flex flex-column ">
            <div className="form-group">
              <div>
                <input
                  type="text"
                 
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value=""
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div >
                <input
                  type="email"
               
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value=""
                  required
                />
              </div>
            </div>

            <textarea
              className="form-control"
              rows="4"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              className="btn main-button text-dark font-weight-normal w-100"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div className="button d-flexn justify-content-center">
                <i className="fa fa-paper-plane"></i>
                <span>SEND</span>
              </div>
            </button>
          </form>
        </div>

       <div className="d-flex">
          <div className="d-flex flex-column mt-5">
          <div className="contact-list">
                <div className="list-unstyled mr-5 p-3 list-item  ">
                  <FontAwesomeIcon icon={faMapMarkerAlt}  />
                <span className="ml-5 text-light contact-text">Dhanmondi, Dhaka</span>
                </div>
                <div className="list-unstyled p-3 list-item ">
                  <FontAwesomeIcon icon={faPhone}  />
                <span className="ml-5 text-light">(212) 555-2368</span>
                </div>
                <div className="list-unstyled p-3 list-item ">
                  <FontAwesomeIcon icon={faEnvelope} />
                <span className="ml-5 text-light">interio.design@gmail.com</span>
                </div>
            </div>

            <div className="d-flex  justify-content-center">
            <Link href="" target="_blank">
              <Image className="mr-3" src={fbImage} height={30} width={30}/>
              </Link>
              <Link href="https://github.com/iMsubha" target="_blank">  
              <Image className="mr-3"  src={githubImage}  height={30} width={30}/>
              </Link>
              <Link href="" target="_blank">
              <Image className="mr-3"  src={instagramImage}   height={30} width={30} /> 
              </Link>   
            </div>
          </div>     
        </div>
       </div>
    </section>
  );
};

export default Contact;
