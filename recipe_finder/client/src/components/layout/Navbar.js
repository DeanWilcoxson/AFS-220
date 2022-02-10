import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../styled_components/Styled_Navbar";
export default function Navbar(props) {
  const { token, logout } = props;
  return (
    <StyledNavbar>
      {token ? <Link to="/user_home">Home</Link> : <></>}
      {token ? <Link to="/recipes">Saved Recipes</Link> : <></>}
      {token ? <button onClick={logout}>Logout</button> : <></>}
    </StyledNavbar>
  );
}
