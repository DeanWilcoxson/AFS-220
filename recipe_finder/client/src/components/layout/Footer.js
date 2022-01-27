import { React, Component } from "react";
import { StyledFooter } from "../styled_components/Styled_Footer";
class Footer extends Component {
  render() {
    return (
      <StyledFooter>
      <ul>
        <li>Contact</li>
        <li>About</li>
        <li>Resources</li>
        <li>Services</li>
      </ul>
        <h4>Copyright &copy; 2022 Dean Wilcoxson</h4>
      </StyledFooter>
    );
  }
}
export default Footer;
