// import Sidebar from "../Sidebar/Sidebar";
import React from "react";
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrderList from '../OrderList/OrderList';

const Admin = () => {
  return (
    <div>
      {/* <Sidebar/> */}
     <div className="d-flex">
        <Sidebar/>
        <OrderList/>
     </div>
    </div>
  );
};

export default Admin;
