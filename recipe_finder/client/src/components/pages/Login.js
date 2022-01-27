import { React, Component } from "react";
import { FlexContainer } from "../styled_components/Flex_Container";
class Login extends Component {
  render() {
    return (
      <FlexContainer>
        <h4>Log In / Sign Up</h4>
        <input placeholder="Email" />
        <input placeholder="Password" />
      </FlexContainer>
    );
  }
}
export default Login;
