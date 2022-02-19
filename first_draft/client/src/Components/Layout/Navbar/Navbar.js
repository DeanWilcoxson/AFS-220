import React from "react";
import { NavContainer, NavBtn, NavLink } from "./NavbarElements";
const Navbar = ({ token, logout }) => {
  return (
    <NavContainer>
      {token ? <NavLink to="/user_home">Home</NavLink> : <></>}
      {token ? <NavLink to="/recipes">Saved Recipes</NavLink> : <></>}
      {token ? <NavBtn onClick={logout}>Logout</NavBtn> : <></>}
    </NavContainer>
  );
};
export default Navbar;
