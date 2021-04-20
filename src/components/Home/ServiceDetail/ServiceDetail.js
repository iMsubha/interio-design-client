import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    const {title, imageURL, details,price} = service;
    
    // const [orders, setOrders] = useState([]);
    const [loginUser] = useContext  (UserContext);
    const handleOrder =(e)=>{
        console.log(loginUser);
        console.log(service); 
        const newOrder = {
            title: service.title,
            name: loginUser.name,
            email: loginUser.email,
            imageURL: service.imageURL,
            price: service.price,
            status: 'pending'
        }
        const url = `https://fierce-beyond-59826.herokuapp.com/addOrders`;
        console.log(newOrder);
        fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newOrder),
          }).then((res) => console.log("server side response"));
    }
    return (
        <div onClick={handleOrder} className="mr-3 p-2">
           <Link className="text-decoration-none" to={`/customer`}>
           <figure  style={{width:'250px',height:'400px'}} className=" ">
                <Image src={imageURL} style={{width:"250px",height:'300px'}} rounded/>
                <figcaption className="d-flex flex-column justify-content-center" >
                    <h6 className="text-uppercase text-center dark pt-2">{title}</h6>
                    <div className="d-flex text-muted pt-2 justify-content-center align-items-center">
                    <p>{details}<small className="ml-2">${price}</small></p>
                    </div>
                </figcaption>			
			</figure>
            {/* <p>{title}</p>
            <Image src={imageURL} style={{width:"50px"}} />
            <p>{email}</p>
            <p>{details}</p> */}
            </Link>
        </div>
    );
};

export default ServiceDetail;