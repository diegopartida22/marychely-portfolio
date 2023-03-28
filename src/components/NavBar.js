import { Navbar, Nav, Collapse } from "bootstrap-4-react";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg" dark mb="3">
      {/* <img src="/m-solid.svg" alt="" width="30px" className="logo" /> */}
      <Navbar.Brand href="/" className="navbar-brand">
        Marychely Romero
      </Navbar.Brand>
      <Navbar.Toggler target="#navbarNav" />
      <Collapse navbar id="navbarNav">
        <Navbar.Nav>
          {/* <Nav.ItemLink href="#" active>
            Inicio
          </Nav.ItemLink> */}
          <Nav.ItemLink href="#aboutme">¿Quién soy?</Nav.ItemLink>
          <Nav.ItemLink href="#services">Servicios</Nav.ItemLink>
          <Nav.ItemLink href="#phrases">Frases</Nav.ItemLink>
          <Nav.ItemLink href="#contact">Contacto</Nav.ItemLink>
        </Navbar.Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
