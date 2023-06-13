import { AuthContext } from "../../providers/AuthProvider";
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export const MainNavbar = () => {
  const { handleLogout, user } = useContext(AuthContext);
  const getRightNav = () => {
    if (user) {
      return (
        <>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavDropdown title={user.email} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/update_profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action4"
                  onClick={() => handleLogout()}
                >
                  {" "}
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>
      );
    } else {
      return (
        <NavDropdown title="Join Us" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
        </NavDropdown>
      );
    }
  };
  return (
    <>
      <Navbar collapseOnSelect bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">RoR-Estate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/available">Available </Nav.Link>
            <Nav.Link href="/cities">Cities </Nav.Link>
            <Nav.Link href="/show"> AllUnits</Nav.Link>
          </Nav>
          {getRightNav()}
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;
