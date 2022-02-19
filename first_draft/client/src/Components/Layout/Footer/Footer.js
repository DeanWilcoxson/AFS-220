import React from "react";
import {
  FooterContainer,
  FooterList,
  FooterLink,
  FooterInfo,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <FooterLink to="/contacts">Contact</FooterLink>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/resources">Resources</FooterLink>
        <FooterLink to="/services">Services</FooterLink>
      </FooterList>
      <FooterInfo>Copyright &copy; 2022 Dean Wilcoxson</FooterInfo>
    </FooterContainer>
  );
};
export default Footer