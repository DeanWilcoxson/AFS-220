import { React, Component } from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../styled_components/Styled_Navbar";
class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Link to="/">Home</Link>
        <Link to="/recipes">Saved Recipes</Link>
      </StyledNavbar>
    );
  }
}
export default Navbar;
