import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavBar = props => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const isLoggedIn = () => {

        return props.isAuthenticated ?
          <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink tag={Link} to="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} to="/profile">Profile</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} to="/logout">Logout</NavLink>
                </NavItem>
            </Nav>
    
          :
    
          <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink tag={Link} to="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={Link} to="/">Login</NavLink>
                </NavItem>
            </Nav>
      };

    return(
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Weight Lifting Journal</NavbarBrand>
                {isLoggedIn()}
            </Navbar>
        </div>
    )
}

export default NavBar;