import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import CustomerSidebar from '../../Shared/CustomerSidebar/CustomerSidebar';
import ServicesList from '../ServicesList/ServicesList';

const Customer = () => {
    const [loginUser] = useContext(UserContext);
    return (
        <div className="d-flex">
            <CustomerSidebar/>
            <ServicesList user={loginUser}/>
        </div>
    );
};

export default Customer;