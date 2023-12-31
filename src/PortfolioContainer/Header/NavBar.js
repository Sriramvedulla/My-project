import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
          <Nav>
            <Nav.Link href="/" className="NavLink" style={{ color: "#fff" }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/projects"
              className="NavLink"
              style={{ color: "#fff" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="NavLink"
              style={{ color: "#fff" }}
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default BasicExample;
