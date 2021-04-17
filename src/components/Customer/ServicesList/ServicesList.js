import React, { useEffect, useState } from 'react';
import ServiceStatus from '../ServiceStatus/ServiceStatus';

const ServicesList = ({user}) => {
    // console.log(user.name);
    const name = user.name;
    const [services,setServices] = useState([])
    useEffect(() => {
       fetch('http://localhost:8000/services')
       .then(res=> res.json())
       .then(data => setServices(data))
    }, [])
    return (
        <div>
            {name}
            <h2>Services List</h2>
             {
                services.map(service => <ServiceStatus service={service}></ServiceStatus> )
             }
        </div>
    );
};

export default ServicesList;