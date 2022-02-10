import React from "react";
import { StyledHeader } from "../styled_components/Styled_Header";
import image from "../../images/Fridge_Buddy_Logo.png";
export default function Header(props) {
  const { user } = props;
  console.log(user);
  return (
    <StyledHeader>
      <img src={image} alt="Logo" />
      {user ? <h3>Hello, {user.username}</h3> : <h4>Hello, Please login</h4>}
    </StyledHeader>
  );
}
