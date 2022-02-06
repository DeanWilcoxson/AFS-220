import React from "react";
import { Link } from "react-router-dom";
import { StyledFooter } from "../styled_components/Styled_Footer";
export default function Footer() {
  return (
    <StyledFooter>
      <ul>
        <Link to="/contacts">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/services">Services</Link>
      </ul>
      <h4>Copyright &copy; 2022 Dean Wilcoxson</h4>
    </StyledFooter>
  );
}
