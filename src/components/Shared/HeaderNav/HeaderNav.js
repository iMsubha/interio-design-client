import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const HeaderNav = () => {
  const [loginUser] = useContext(UserContext);
 
  return (
    <nav className="m-2">
      <Navbar variant="light">
        <Navbar.Brand href="#home">logo</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="mr-5">
            <Link className="dark" to="/home">Home</Link>
          </Nav.Link>
         <Nav.Link>
         <a className="mr-5 dark" href="#services">
          Services
          </a>
         </Nav.Link>
          <Nav.Link className="mr-5">
             <Link  to="/admin" className="dark">Admin</Link>
          </Nav.Link>
          <Nav.Link className="mr-5">
             <Link  to="/customer" className="dark">User</Link>
          </Nav.Link>
          {loginUser && <p>{loginUser.name}</p>}
            <Button className="main-button border-0">
                <Link className="text-light" to="/login">Login</Link>
            </Button>
        </Nav>
      </Navbar>
    </nav>
  );
};

export default HeaderNav;
