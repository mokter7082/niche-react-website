import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Mynav = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <h2>mobilezone</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link>
              {user.email ? (
                <button onClick={logOut}>Logout</button>
              ) : (
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/login"
                >
                  Login
                </Link>
              )}
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/allMobile"
              >
                All Mobile
              </Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/explore"
              >
                Explore
              </Link>{" "}
            </Nav.Link>
            {user.email && (
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/dashboard"
                >
                  Dashboard
                </Link>{" "}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Mynav;
