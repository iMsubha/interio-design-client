import React from 'react';
import CustomerSidebar from '../../Shared/CustomerSidebar/CustomerSidebar';

const CheckOut = ({user}) => {
    const name = user.name;
    return (
        <div  className="d-flex">
            <CustomerSidebar/>
            {name}
            <h5>Check Out</h5>
        </div>
    );
};

export default CheckOut;