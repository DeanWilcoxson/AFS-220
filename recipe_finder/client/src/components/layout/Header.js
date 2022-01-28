import { React, Component } from "react";
import { StyledHeader } from "../styled_components/Styled_Header";
import image from "../../images/FridgeBuddy_Logo.jpg";
class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <img src={image} alt="Logo" />
      </StyledHeader>
    );
  }
}
export default Header;
