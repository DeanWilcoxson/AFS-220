import React from "react";
import { StyledHeader } from "../styled_components/Styled_Header";
import image from "../../images/FridgeBuddy_Logo.jpg";
export default function Header() {
  return (
    <StyledHeader>
      <img src={image} alt="Logo" />
    </StyledHeader>
  );
}
