import React from "react";
import { AuthForm, AuthInput, AuthError, AuthButton } from "./AuthElements";
const Form = ({
  handleSubmit,
  btnText,
  handleChange,
  errMsg,
  username,
  password,
}) => {
  return (
    <AuthForm>
      <AuthInput
        placeholder="Username"
        name="username"
        type="text"
        onChange={handleChange}
        value={username}
      />
      <AuthInput
        placeholder="Password"
        name="password"
        type="text"
        onChange={handleChange}
        value={password}
      />
      <AuthButton onClick={handleSubmit}>{btnText}</AuthButton>
      {errMsg ? <AuthError>{errMsg}</AuthError> : <></>}
    </AuthForm>
  );
};
export default Form;
