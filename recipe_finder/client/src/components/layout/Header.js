import React from "react";
import { StyledHeader } from "../styled_components/Styled_Header";
import image from "../../images/Fridge_Buddy_Logo.png";
export default function Header(props) {
  const { user } = props;
  console.log(user);
  return (
    <StyledHeader>
      <img src={image} alt="Logo" />
      {user ? <h3>{user.username}</h3> : <h3>Hello, Please login</h3>}
    </StyledHeader>
  );
  // <h3>{!user ? `Hello, Please login` : `Hello, ${user.username}`}</h3>
  // Ternary Statement not working properly... "Please login" persists even with a user.
}
