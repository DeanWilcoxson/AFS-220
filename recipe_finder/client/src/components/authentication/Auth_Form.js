import React from "react";
export default function Form(props) {
  const {
    handleSubmit,
    btnText,
    handleChange,
    errMsg,
    username,
    password,
  } = props;
  return (
    <form>
      <input
        placeholder="Email Address"
        name="username"
        type="text"
        onChange={handleChange}
        value={username}
      />
      <input
        placeholder="Password"
        name="password"
        type="text"
        onChange={handleChange}
        value={password}
      />
      <button onClick={handleSubmit}>{btnText}</button>
      <p className="errMsg">{errMsg}</p>
    </form>
  );
}
