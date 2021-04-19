import {
  CDBSidebar,
  CDBSidebarContent,

  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact';
import React from 'react';
import {
  NavLink
} from 'react-router-dom';

const CustomerSidebar = () => {
    
    return (
        <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="black" backgroundColor="#ddd6f3">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <NavLink exact to="/home"
                  href="/"
                  className="text-decoration-none"
                  style={{ color: 'black', }}
                >
                  Interio Design 
                </NavLink>
              </CDBSidebarHeader>
      
              <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                  <NavLink exact to="/customer">
                    <CDBSidebarMenuItem icon="columns"  className="sidebar-style ">Services List</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/checkOut">
                    <CDBSidebarMenuItem icon="table"  className="sidebar-style">Check Out</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/review">
                    <CDBSidebarMenuItem icon="chart-line"  className="sidebar-style">
                      Review
                    </CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>
            </CDBSidebar>
          </div>
    );
};

export default CustomerSidebar;