import React from "react";
import { Card, Col, Image } from "react-bootstrap";

const ServiceStatus = ({ service }) => {
  console.log(service);
  return (
    <Col className="">
      <Card style={{ width: "250px", height: "330px" }} className="mr-3 mb-5">
        <Image src={service.imageURL} height={200}></Image>
        <Card.Body>
          <Card.Title className="font-weight-light h6">
            {service.title}
          </Card.Title>
          <Card.Text className="h6 text-muted">
            <small>{service.status}</small>
          </Card.Text>

          <Card.Text className="h6 text-muted ">
          <small>${service.price}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceStatus;
