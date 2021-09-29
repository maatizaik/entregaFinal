import CartWidget from './cartWidget';
import React, { useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Categorias from '../pages/categorias';



function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
        FakeStore
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/productos">Listado de Productos</NavLink>
            </NavItem>
            <Categorias/>
            <NavItem>
              <CartWidget/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default NavBar;