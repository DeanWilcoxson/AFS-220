import { React, useState } from "react";
import axios from "axios";
export const UserContext = React.createContext();
const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default function UserProvider(props) {
  const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    recipes: [],
    savedRecipes: [],
    errMsg: "",
  }
  function login() {}
  function signup() {}
  function handleAuthError() {}
  function resetAuthErr() {}

  return (
    <UserContext.Provider value={{}}>{props.children}</UserContext.Provider>
  );
}
