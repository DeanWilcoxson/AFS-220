import { React, useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import Form from "./Auth_Form";
import {
  AuthContainer,
  AuthTitle,
  ToggleButton,
  AuthBox,
} from "./AuthElements";

const initInputs = { username: "", password: "" };
const Auth = () => {
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);
  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext);
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }
  function handleLogin(e) {
    e.preventDefault();
    if (inputs.username.value === "" || inputs.password.value === "") {
      return alert("Please fill in both fields.");
    } else {
      login(inputs);
    }
  }
  function handleSignup(e) {
    e.preventDefault();
    console.log(inputs);
    signup(inputs);
  }
  function toggleForm() {
    setToggle((prev) => !prev);
    resetAuthErr();
  }
  return (
    <AuthContainer>
      <AuthBox>
        <AuthTitle>Log In / Sign Up</AuthTitle>
        {!toggle ? (
          <>
            <Form
              handleChange={handleChange}
              handleSubmit={handleSignup}
              inputs={inputs}
              btnText="Sign Up"
              errMsg={errMsg}
            />
            <ToggleButton onClick={() => toggleForm()}>
              Already a Member?
            </ToggleButton>
          </>
        ) : (
          <>
            <Form
              handleChange={handleChange}
              handleSubmit={handleLogin}
              inputs={inputs}
              btnText="Sign In"
              errMsg={errMsg}
            />
            <ToggleButton onClick={() => toggleForm()}>
              Not a Member?
            </ToggleButton>
          </>
        )}
      </AuthBox>
    </AuthContainer>
  );
};
export default Auth;
