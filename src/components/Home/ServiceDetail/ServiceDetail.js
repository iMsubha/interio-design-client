import React from 'react';
import { Image } from 'react-bootstrap';

const ServiceDetail = ({service}) => {
    const {title, imageURL, email, details} = service;
    console.log(service); 
    const handleService = ()=>{
  
    }

    return (
        <div onClick={handleService}>
            <h1>card</h1>
            <p>{title}</p>
            <Image src={imageURL} style={{width:"50px"}} />
            <p>{email}</p>
            <p>{details}</p>
        </div>
    );
};

export default ServiceDetail;