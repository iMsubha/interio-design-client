import React from "react";
import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import HeaderNav from "../../Shared/HeaderNav/HeaderNav";
const OrderList = () => {
   const orders=[
       {
           name:"abe",
           email:"abe@gmail.com",
           service:"Bedroom Interior Design",
           payment:"Cradit Card",
           status:""

       },
       {
        name:"ayuie",
        email:"abe@gmail.com",
        service:"Bedroom Interior Design",
        payment:"Cradit Card",
        status:"pending"
    },
    {
        name:"rtyi",
        email:"abe@gmail.com",
        service:"Bedroom Interior Design",
        payment:"Cradit Card",
        status:"done"

    }
   ]
  return (
    <section>
      <HeaderNav />
      <h2>Order List</h2>
      <Card className="m-5 shadow-md rounded-lg">
          <Table responsive=" sm md xl">
            <thead>
              <tr>
                <th>User Name</th>
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
                  <td>{order.service}</td>
                  <td>{order.payment}</td>
                  <td>{order.status}</td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Card>
   
    </section>
  );
};

export default OrderList;
