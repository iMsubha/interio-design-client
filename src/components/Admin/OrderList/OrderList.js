import React, { useEffect, useState } from "react";
import { Card, Container, Nav } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import 'react-dropdown/style.css';
const OrderList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://fierce-beyond-59826.herokuapp.com/order")
    .then((res) => res.json())
    .then((data) => {
     //console.log(data);
      setOrders(data)
    }
    );
}, []);

  return (
    <Container className="p-0">
      <Nav className="bg-light d-flex justify-content-start">
        <h3 className="p-2" style={{ color: "#b0dab9" }}>
          Order List
        </h3>
      </Nav>
      <Card className="m-5 shadow-md rounded-lg">
        <Table responsive=" sm md xl">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Service</th>
              <th>Pay With</th>
              <th>Status</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody>
              <tr>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.title}</td>
                <td>Card payment</td>
                <td>{order.status}</td>    
              </tr>
            </tbody>
          ))}
        </Table>
      </Card>
      </Container>
  );
};

export default OrderList;
