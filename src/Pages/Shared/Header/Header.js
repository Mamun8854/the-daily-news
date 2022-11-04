import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, providerLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    providerLogOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        className="mb-4"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link className="text-decoration-none text-black fw-bold" to="/">
              The Daily News
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#allnews">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <>
                {user?.uid ? (
                  <>
                    <span className="me-2">{user?.displayName}</span>
                  </>
                ) : (
                  <>
                    <Link
                      className="me-2 text-decoration-none text-black fw-semibold"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="text-decoration-none text-black fw-semibold"
                      to="/register"
                    >
                      Register
                    </Link>
                  </>
                )}
              </>
              <Link to="/profile">
                {user?.photoURL ? (
                  <>
                    <Image
                      className="me-2"
                      roundedCircle
                      style={{ height: "40px" }}
                      src={user?.photoURL}
                    ></Image>
                    <Button onClick={handleLogOut} variant="light">
                      Logout
                    </Button>
                  </>
                ) : (
                  <FaUser></FaUser>
                )}
              </Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
