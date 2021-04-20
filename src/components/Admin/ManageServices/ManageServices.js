import React, { useEffect, useState } from "react";
import { Card, Container, Image, Nav } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import deleteIcon from '../../../icons/001-trash.svg';
import Sidebar from "../../Shared/Sidebar/Sidebar";
const ManageServices = () => {
  const [services,setServices] = useState([])

  useEffect(() => {
    fetch('https://fierce-beyond-59826.herokuapp.com/services')
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        setServices(data)
    })
 }, [])

 const deleteService =(event, id)=>{
  console.log(event.target.parentNode)
  fetch(`https://fierce-beyond-59826.herokuapp.com/delete/${id}`,{
    method: 'DELETE'
  }).then((res) => res.json())
  .then(result =>{
    if(result){
     event.target.parentNode.style.display = 'none';
    }
  })
}
  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="p-0">
        <Nav className="bg-light d-flex justify-content-start">
          <h3 className="p-2" style={{ color: "#b0dab9" }}>
            Manage Services
          </h3>       
        </Nav>
        <Card className="m-5 shadow-md rounded-lg">
        <Table responsive=" sm md xl">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Delete</th>
            </tr>
          </thead>
          {services.map((service) => (
            <tbody>
              <tr>
                <td key={service._id}>{service.title}</td>
                <td key={service._id}>{service.email}</td>
                <td key={service._id}>{service.price}</td>
                <td key={service._id} className="d-flex justify-content-center">
               <Image  onClick={(event) =>deleteService(event, service._id)} 
                src={deleteIcon} width={20}/>   
              </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Card>
        </Container>
    </div>
  );
};

export default ManageServices;
