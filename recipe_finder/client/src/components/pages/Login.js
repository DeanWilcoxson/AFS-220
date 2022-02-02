import { React, Component } from "react";
import { FlexContainer } from "../styled_components/Flex_Container";
class Login extends Component {
  render() {
    return (
      <FlexContainer>
        <h4>Log In / Sign Up</h4>
        <form>
          <input placeholder="Email" name="username" />
          <input placeholder="Password" name="password" />
        </form>
        <button>Submit</button>
      </FlexContainer>
    );
  }
}
export default Login;
