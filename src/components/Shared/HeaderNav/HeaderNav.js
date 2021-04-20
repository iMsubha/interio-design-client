import React, { useContext } from "react";
import { Button, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from '../../../images/logo.png';
const HeaderNav = () => {
  const [loginUser] = useContext(UserContext);
 console.log(loginUser);
  return (
    <nav className="m-2">
      <Navbar variant="light" expand='lg' >
        <Navbar.Brand className="d-flex align-items-start" href="#home">
          <Image src={logo} width={40}></Image>
          <p className="pt-1 pl-1 ">INTERIO DESIGN</p>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="mr-5">
            <Link className="dark" to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link className="mr-5">
             <Link  to="/admin" className="dark">Admin</Link>
          </Nav.Link>
          <Nav.Link className="mr-5">
             <Link  to="/customer" className="dark">User</Link>
          </Nav.Link>
          <Nav.Link className="mr-5" href="#contact">
         <li className=" dark"> Contact</li> 
          </Nav.Link>
            <div className="d-flex flex-column">
            <Button className="main-button border-0">
              <Link style={{letterSpacing:'5px'}} 
              className="text-uppercase text-dark font-weight-normal text-center " 
              to="/login">
               Login
              </Link>
            </Button>
            {loginUser && <small>{loginUser.name}</small>}
            </div>
        </Nav>
      </Navbar>
    </nav>
  );
};

export default HeaderNav;
