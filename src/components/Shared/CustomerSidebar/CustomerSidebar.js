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
            <CDBSidebar textColor="#fff" backgroundColor="#333">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <NavLink exact to="/home"
                  href="/"
                  className="text-decoration-none"
                  style={{ color: 'inherit' }}
                >
                  logo 
                </NavLink>
              </CDBSidebarHeader>
      
              <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                  <NavLink exact to="/customer" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="columns">Services List</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/checkOut" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table">Check Out</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/review" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">
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