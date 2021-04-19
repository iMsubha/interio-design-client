import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './ReviewCard.css';
const ReviewCard = ({reviewData}) => {
    console.log(reviewData);
    const {name, profileImageURL, review,rating} = reviewData;
    console.log(rating);
    console.log(profileImageURL);
  
    return (
        <Col>
          <Card style={{width:'250px',height:'250px'}} className="d-flex flex-column justify-content-center align-items-center p-4 mb-3 review-card">
          <Image src={profileImageURL} style={{width:'80px',height:'80px'}} roundedCircle></Image>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center mt-2">
             <p>{name}</p>
             <small>{review}</small>
          </Card.Body>
          {/* {rating} */}
          <div id="full-stars-example">
            <div class="rating-group">
                <label aria-label="1 star" class="rating__label" for="rating-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                <input class="rating__input" name="rating" id="rating-1" value="1" type="radio"/>
                <label aria-label="2 stars" class="rating__label" for="rating-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                <input class="rating__input" name="rating" id="rating-2" value="2" type="radio"/>
                <label aria-label="3 stars" class="rating__label" for="rating-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                <input class="rating__input" name="rating" id="rating-3" value="3" type="radio" />
                <label aria-label="4 stars" class="rating__label" for="rating-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                <input class="rating__input" name="rating" id="rating-4" value="4" type="radio" checked/>
                <label aria-label="5 stars" class="rating__label" for="rating-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                <input class="rating__input" name="rating" id="rating-5" value="5" type="radio" />
            </div>
            
          </div>
          
          
          </Card>
          <div>
        
      </div>
        </Col>
    );
};

export default ReviewCard;