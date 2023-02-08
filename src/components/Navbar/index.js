import React from "react";
import { Nav, NavLink, NavMenu, NavLogo } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLogo to="/" activeStyle>
            Cynthia Knott
          </NavLogo>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/" activeStyle>
            Work
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;