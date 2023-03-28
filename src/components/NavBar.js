import { Navbar, Nav, Collapse } from "bootstrap-4-react";
import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar class="navbar sticky-top" fixed="top" expand="lg" dark>
      {/* <img src="/m-solid.svg" alt="" width="30px" className="logo" /> */}
      <Navbar.Brand href="/" className="navbar-brand">
        Marychely Romero
      </Navbar.Brand>
      <Navbar.Toggler target="#navbarNav" />
      <Collapse navbar id="navbarNav">
        <Navbar.Nav>
          <Nav.ItemLink active>
            {" "}
            <Link
              to="homepage"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Inicio
            </Link>
          </Nav.ItemLink>
          <Nav.ItemLink>
            <Link
              to="aboutme"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              ¿Quién soy?
            </Link>
          </Nav.ItemLink>
          <Nav.ItemLink>
            <Link
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Servicios
            </Link>
          </Nav.ItemLink>
          <Nav.ItemLink>
            <Link
              to="phrases"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Frases
            </Link>
          </Nav.ItemLink>
          <Nav.ItemLink>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              Contacto
            </Link>
          </Nav.ItemLink>
        </Navbar.Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
