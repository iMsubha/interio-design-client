import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Container, Nav } from "react-bootstrap";
import CustomerSidebar from "../../Shared/CustomerSidebar/CustomerSidebar";
import SplitCardForm from "../SplitCardForm/SplitCardForm";
const stripePromise = loadStripe(
  "pk_test_51IeBcXCcE93ITqiXdBfElxofvHavRd0tRNem79Zku1w6fg2JSgeg1ZaWKPaS9o8hzAEa0TsAFsX5fGKJWKA5NAWs00IJINQMgs"
);
const CheckOut = ({ user }) => {
  const name = user.name;
  return (
    <div className="d-flex">
      <CustomerSidebar />

      <Container className="p-0 m-0">
        <Nav className="bg-light d-flex justify-content-between">
          <h3 className="p-2" style={{ color: "#b0dab9" }}>
            Check Out
          </h3>
          <small className="p-3">{name}</small>
        </Nav>
        <Elements stripe={stripePromise}>
          <SplitCardForm />
        </Elements>
      </Container>
    </div>
  );
};

export default CheckOut;
