import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function BasicExample() {
  return (
    <div className="sticky-element">
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Navbar.Brand className="mr-4 my-2">
          <div className="logo-name">
            <img alt="logo" src="./profile.jpeg" />
            <h3>sriram vedulla</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "#fff" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav">
            <NavLink exact to="/" className="NavLink" style={{ color: "#fff" }}>
              {" "}
              {/* Use NavLink with 'to' instead of 'href' */}
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className="NavLink"
              style={{ color: "#fff" }}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="NavLink"
              style={{ color: "#fff" }}
            >
              Contact Me
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default BasicExample;
