import { React, useState, useContext } from "react";
import Form from "./Auth_Form";
import { FlexContainer } from "../styled_components/Flex_Container";
import { UserContext } from "../../context/UserContext.js";

const initInputs = { username: "", password: "" };
export default function Auth() {
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
    <FlexContainer>
      <h4>Log In / Sign Up</h4>
      {!toggle ? (
        <>
          <Form
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign Up"
            errMsg={errMsg}
          />
          <button onClick={() => toggleForm()}>Already a Member?</button>
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
          <button onClick={() => toggleForm()}>Not a Member?</button>
        </>
      )}
    </FlexContainer>
  );
}
