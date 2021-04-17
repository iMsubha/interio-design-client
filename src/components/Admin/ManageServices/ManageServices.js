import React from 'react';
import HeaderNav from '../../Shared/HeaderNav/HeaderNav';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const ManageServices = () => {
    return (
        <div className="d-flex">
        <Sidebar/>
        <div>
               <HeaderNav/>
            <h2>ManageServices</h2>
        </div>
        </div>
    );
};

export default ManageServices;