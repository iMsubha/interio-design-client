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
        //console.log(data);
       })
    }, [])
   
    return (
        <div style={{backgroundColor:'#ddd6f3'}} className="pb-5">
            <h3 className="text-muted text-center pb-5 pt-5 text-uppercase">Testimonials</h3>
            <Row className="flex-wrap m-2">
             {
                  reviews.map(review => <ReviewCard key={review._id} reviewData={review}></ReviewCard> )
             }
            
             </Row>
        </div>
    );
};

export default Testimonial;