import React from "react";
import { Container, Nav } from "react-bootstrap";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const ManageServices = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Container className="p-0">
        <Nav className="bg-light d-flex justify-content-start">
          <h3 className="p-2" style={{ color: "#b0dab9" }}>
            Manage Services
          </h3>
        </Nav>
        <h2>ManageServices</h2>
        </Container>
    </div>
  );
};

export default ManageServices;
