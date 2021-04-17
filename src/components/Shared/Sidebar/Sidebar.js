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
const Sidebar = () => {
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
                  <NavLink exact to="/admin" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="columns">Order List</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/addServices" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table">Add Services</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/makeAdmin" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">Make Admin</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/manageServices" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">
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