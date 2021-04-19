import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './MemderCard.css';
const MemberCard = ({member}) => {
    console.log(member);
    return (
        <Col>
        <Card className="d-flex justify-content-center align-items-center border-top-0 border-right-0 border-left-0">   
            <div>
              <Image src={member.imageURL} width={200} height={200}></Image>
            </div>
            <div style={{width:'80px', height:'80px'}} className="bg-dark info-style-dark">
               <p className="text-light font-italic">{member.name}</p>
            </div>
            <small className="text-dark font-italic font-weight-bold" >{member.profession}</small>
        </Card>
        </Col>
    );
};

export default MemberCard;