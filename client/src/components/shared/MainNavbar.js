import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AuthContext } from "../../providers/AuthProvider";
import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export const MainNavbar = () => {
  const { handleLogout, user } = useContext(AuthContext);
  const getRightNav = () => {
    if (user) {
      console.log("I am authenticated");
      return (
        <>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown title="Profile" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  <Link style={{ textDecoration: "none" }} to="/update_profile">
                    <Menu.Item>Profile</Menu.Item>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>
      );
    } else {
      console.log("Not authenticated");
      return (
        <Menu.Menu position="right">
          <Link style={{ textDecoration: "none" }} to="/register">
            <Menu.Item>Register</Menu.Item>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Menu.Item>Login</Menu.Item>
          </Link>
        </Menu.Menu>
      );
    }
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" light bgColor="light">
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: "none" }} to="/">
              RoR-Gaming
            </Link>
          </Navbar.Brand>
          {getRightNav()}
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
