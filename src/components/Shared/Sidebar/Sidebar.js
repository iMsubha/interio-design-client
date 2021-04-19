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
import './Sidebar.css';
const Sidebar = () => {
        return ( 
            <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial',fontFamily: "Poppins" }}>
            <CDBSidebar textColor="black" backgroundColor="#ddd6f3">
              <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <NavLink exact to="/home"
                  href="/"
                  className="text-decoration-none font-weight-light"
                  style={{ color: 'black' }}
                >
                  Interio Design
                </NavLink>
              </CDBSidebarHeader>
      
              <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                  <NavLink exact to="/admin" >
                    <CDBSidebarMenuItem icon="columns" className="sidebar-style">Order List</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/addServices" >
                    <CDBSidebarMenuItem icon="table"  className="sidebar-style">Add Services</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/makeAdmin" >
                    <CDBSidebarMenuItem icon="user"  className="sidebar-style">Make Admin</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/manageServices">
                    <CDBSidebarMenuItem icon="chart-line"  className="sidebar-style">
                      Manage Services
                    </CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>
            </CDBSidebar>
          </div>
            );
        };

        export default Sidebar;