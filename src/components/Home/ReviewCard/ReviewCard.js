import React from 'react';
import { Col, Image } from 'react-bootstrap';

const ReviewCard = ({reviewData}) => {
    console.log(reviewData);
    const {name, profileImageURL, review} = reviewData;
    console.log(profileImageURL);
    return (
        <Col>
            <p>{name}</p>
            <Image src={profileImageURL} style={{width:'50px'}}></Image>
            <p>{review}</p>
        </Col>
    );
};

export default ReviewCard;