import CartWidget from './cartWidget';
import React, { useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import Categorias from '../pages/categorias';
import {Link} from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link to="/">FakeStore</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/productos">Listado de Productos</Link>
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