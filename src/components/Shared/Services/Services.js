import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ServiceDetail from '../../Home/ServiceDetail/ServiceDetail';
const Services = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
       fetch('http://localhost:8000/services')
       .then(res=> res.json())
       .then(data => {
           console.log(data);
           setServices(data)
       })
    }, [])
    return (
        <section> 
        <h1 className="text-muted text-center pb-5 pt-5">Our Services</h1>
        <Container className="d-flex flex-wrap justify-content-center align-items-center" id="services" fluid> 
            {
                services.map(service => <ServiceDetail key={service._id}  service={service}></ServiceDetail>)
            }
        </Container>
        </section>
    );
};

export default Services;