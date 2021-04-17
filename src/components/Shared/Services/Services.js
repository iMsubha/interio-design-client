import React, { useEffect, useState } from 'react';
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
        <div className="d-flex" id="services" >
            <h2>Services</h2>
            {
                services.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
        </div>
    );
};

export default Services;