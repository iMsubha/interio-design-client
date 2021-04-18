import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
const ReviewCard = ({reviewData}) => {
    console.log(reviewData);
    const {name, profileImageURL, review,rating} = reviewData;
    console.log(rating);
    console.log(profileImageURL);
    return (
        <Col>
          <Card style={{width:'250px',height:'250px'}} className="d-flex flex-column justify-content-center align-items-center p-4 mb-3">
          <Image src={profileImageURL} style={{width:'50px'}} roundedCircle></Image>
          <Card.Body>
             <p>{name}</p>
             <p>{review}</p>
          </Card.Body>
          <Card.Footer className="text-muted">
          {rating}
        
          </Card.Footer>
          </Card>
        </Col>
    );
};

export default ReviewCard;