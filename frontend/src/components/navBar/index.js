import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./index.scss";

function NavBarButtons() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (JSON.parse(isLoggedIn)) {
    return (
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/accounts">
          Accounts
        </Nav.Link>
        <Nav.Link as={Link} to="/analytics">
          Analytics
        </Nav.Link>
        <Nav.Link as={Link} to="/settings">
          Settings
        </Nav.Link>
        <Nav.Link as={Link} to="/signout" onClick={localStorage.setItem("isLoggedIn", false)}>
          Sign Out
        </Nav.Link>
      </Nav>
    );
  } else {
    return (
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={Link} to="/signup">
          Signup
        </Nav.Link>
      </Nav>
    );
  }
}

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/" className="title">
        Smart Finance
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <NavBarButtons />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
