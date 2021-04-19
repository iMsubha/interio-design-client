import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MemberCard from '../MemberCard/MemberCard';

const Team = () => {
    const [members,setMembers] = useState([])
    useEffect(() => {
       fetch('http://localhost:8000/admin')
       .then(res=> res.json())
       .then(data => {
           console.log(data);
           setMembers(data)
       })
    }, [])
    return (
        <div>
            <h2 className="text-muted text-center pb-5 pt-5">OUR TEAM</h2>
            <Row className="d-flex flex-wrap m-3">
             {
                 members.map(member =><MemberCard key={member._id} member={member}></MemberCard>)
             }
             </Row>
        </div>
    );
};

export default Team;