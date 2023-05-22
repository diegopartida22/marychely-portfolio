import { Navbar, Nav, Collapse } from "bootstrap-4-react";
import { Link } from "react-scroll";
import { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsNavOpen(false);
  };

  return (
    <Navbar class="navbar sticky-top" fixed="top" expand="lg" dark>
      {/* <img src="/m-solid.svg" alt="" width="30px" className="logo" /> */}
      <Navbar.Brand href="/" className="navbar-brand">
        Marychely Romero
      </Navbar.Brand>
      <Navbar.Toggler
        target="#navbarNav"
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={isNavOpen ? "collapsed" : ""}
      />
      <Collapse navbar className={isNavOpen ? "show collapsing" : "collapsing"}>
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
              onClick={handleNavItemClick}
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
              onClick={handleNavItemClick}
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
              onClick={handleNavItemClick}
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
              onClick={handleNavItemClick}
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
              onClick={handleNavItemClick}
            >
              Contacto
            </Link>
          </Nav.ItemLink>
          <Nav.ItemLink>
            <Link
              to="calculator"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              onClick={handleNavItemClick}
            >
              Año personal
            </Link>
          </Nav.ItemLink>
        </Navbar.Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
