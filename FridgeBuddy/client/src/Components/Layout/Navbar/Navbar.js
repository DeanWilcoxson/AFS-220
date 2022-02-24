import React from "react";
import {
  NavContainer,
  NavMenu,
  NavBtn,
  NavLink,
  MobileIcon,
  BarsIcon,
} from "./NavbarElements";
const Navbar = ({ token, logout, toggle }) => {
  return (
    <NavContainer>
      {token ? (
        <MobileIcon onClick={toggle}>
          <BarsIcon />
        </MobileIcon>
      ) : (
        <></>
      )}
      <NavMenu>
        {token ? <NavLink to="/user_home">Home</NavLink> : <></>}
        {token ? <NavLink to="/recipes">Saved Recipes</NavLink> : <></>}
        {token ? <NavBtn onClick={logout}>Logout</NavBtn> : <></>}
      </NavMenu>
    </NavContainer>
  );
};
export default Navbar;
