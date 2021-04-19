import React from "react";
import { Nav } from "react-bootstrap";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import ServiceForm from "../ServiceForm/ServiceForm";

const AddServices = () => {
  
  return (
    <div className="d-flex" >
      <Sidebar />
      <div>
      <Nav className="bg-light d-flex justify-content-start">
          <h3 className="p-2" style={{ color: "#b0dab9" }}>
          Add Services
          </h3>
        </Nav>
        <ServiceForm/>
      </div>
    </div>
  );
};

export default AddServices;
