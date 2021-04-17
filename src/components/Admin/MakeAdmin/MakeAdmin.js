import React from 'react';
import HeaderNav from '../../Shared/HeaderNav/HeaderNav';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <div className="d-flex">
           <Sidebar/>
            <div>
               <HeaderNav/>
               <h2>Make Admin</h2>
            </div>
        </div>
    );
};

export default MakeAdmin;