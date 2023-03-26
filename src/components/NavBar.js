import { Navbar, Nav, Collapse } from "bootstrap-4-react";
import "./NavBar.css";

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

function getDate() {
  date = new Date();
  hour = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  return (
    <Nav.ItemLink disabled>
      {hour} : {minutes} : {seconds}
    </Nav.ItemLink>
  );
}

setInterval(getDate, 1000);

function NavBar() {
  return (
    <Navbar className="navbar" expand="lg" dark mb="3">
      {/* <img src="/m-solid.svg" alt="" width="30px" className="logo" /> */}
      <Navbar.Brand href="#" className="navbar-brand">
        Marychely Romero
      </Navbar.Brand>
      <Navbar.Toggler target="#navbarNav" />
      <Collapse navbar id="navbarNav">
        <Navbar.Nav>
          <Nav.ItemLink href="#" active>
            Inicio
          </Nav.ItemLink>
          <Nav.ItemLink href="#">¿Quién soy?</Nav.ItemLink>
          <Nav.ItemLink href="#">Servicios</Nav.ItemLink>
          {/* <Nav.Item dropdown>
            <Nav.Link dropdownToggle>Servicios</Nav.Link>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Nav.Item> */}
          <Nav.ItemLink href="#">Contacto</Nav.ItemLink>

          {/* <Nav.ItemLink disabled>
            {hour} : {minutes} : {seconds}
          </Nav.ItemLink> */}
        </Navbar.Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar;
