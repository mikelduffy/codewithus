import React, { PropTypes } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = (props) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        CodeWithUs
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem href="#" onClick={props.onLogout}>Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default Header;
