import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Row } from "react-bootstrap";
import { UserContext } from "../../../App";
import ServiceStatus from "../ServiceStatus/ServiceStatus";

const ServicesList = ({ user }) => {
  // console.log(user.name);
  //const email = user.email;
  const [loginUser]=useContext(UserContext)
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://fierce-beyond-59826.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) =>{
        const displayData = data.filter(newdata=> newdata.email=== loginUser.email) 
       // console.log(displayData);
        setServices(displayData)
      });
  }, [loginUser.email]);
  return (
   
    
      <Container className="p-0">
      
        <Nav className="bg-light d-flex justify-content-between mb-5">
          <h3 className="p-2" style={{ color: "#b0dab9" }}>
          Services List
          </h3>
          <small className="p-3">{user.name}</small>
        </Nav>
        
        <Row className="d-flex flex-wrap m-4">
        {services.map((service) => (
          <ServiceStatus key={service._id} service={service}></ServiceStatus>
        ))}
       </Row>
      </Container>
  );
};

export default ServicesList;
