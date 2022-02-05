import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../styled_components/Styled_Navbar";
export default function Navbar(props) {
  const { token, logout } = props;
  return (
    <div>
      <StyledNavbar>
        {token ? <Link to="/user_home">Home</Link> : <></>}
        {token ? <Link to="/recipes">Saved Recipes</Link> : <></>}
        {token ? <button onClick={logout}>Logout</button> : <></>}
        {token ? <Link to="/contacts">Contact</Link> : <></>}
        {token ? <Link to="/about">About</Link> : <></>}
        {token ? <Link to="/resources">Resources</Link> : <></>}
        {token ? <Link to="/services">Services</Link> : <></>}
      </StyledNavbar>
    </div>
  );
}
