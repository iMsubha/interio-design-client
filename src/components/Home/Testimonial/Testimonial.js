import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ReviewCard from '../ReviewCard/ReviewCard';

const Testimonial = () => {
    const [reviews,setReviews] = useState([])
    useEffect(() => {
       fetch('http://localhost:8000/reviews')
       .then(res=> res.json())
       .then(data =>{
        setReviews(data)
        console.log(data);
       })
    }, [])
    return (
        <div>
            <h4>Testimonial</h4>
            <Row>
             {
                  reviews.map(review => <ReviewCard reviewData={review}></ReviewCard> )
             }
             </Row>
        </div>
    );
};

export default Testimonial;