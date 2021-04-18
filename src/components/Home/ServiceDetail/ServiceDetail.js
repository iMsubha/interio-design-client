import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    const {title, imageURL, details,price} = service;
    console.log(service); 
   
    return (
        <div className="mr-3 p-2">
           <Link className="text-decoration-none" to={`/customer`}>
           <figure  style={{width:'250px',height:'400px'}} className=" ">
                <Image src={imageURL} style={{width:"250px",height:'300px'}} rounded/>
                <figcaption className="d-flex flex-column justify-content-center" >
                    <h6 className="text-uppercase text-center dark pt-2">{title}</h6>
                    <div className="d-flex text-muted pt-2 justify-content-center align-items-center">
                    <p>{details}<small className="ml-2">${price}</small></p>
                    </div>
                </figcaption>			
			</figure>
            {/* <p>{title}</p>
            <Image src={imageURL} style={{width:"50px"}} />
            <p>{email}</p>
            <p>{details}</p> */}
            </Link>
        </div>
    );
};

export default ServiceDetail;