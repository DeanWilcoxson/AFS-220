import { React, Component } from "react";
import { StyledHeader } from "../styled_components/Styled_Header";
// import image from "../../images/FridgeBuddy_Logo";
class Header extends Component {
  render() {
    // var logo = <img src="../../images/FridgeBuddy_Logo" alt="Logo" />;
    return (
      <StyledHeader>
        <h1>Fridge Buddy</h1>
        <h3>Your Refrigerator, Our Recipes</h3>
      </StyledHeader>
    );
  }
}
export default Header;
