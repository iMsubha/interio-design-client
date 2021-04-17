import React from "react";
import HeaderNav from "../../Shared/HeaderNav/HeaderNav";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import ServiceForm from "../ServiceForm/ServiceForm";

const AddServices = () => {
  
  return (
    <div className="d-flex" >
      <Sidebar />
      <div  style={{  width: '100%' }}>
        <HeaderNav />
        <h2>Add Services</h2>
        <ServiceForm/>
      </div>
    </div>
  );
};

export default AddServices;
