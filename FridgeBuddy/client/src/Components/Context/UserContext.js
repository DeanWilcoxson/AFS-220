import React, { useState } from "react";
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
    ingredients: [],
    recipes: [],
    savedRecipes: [],
    errMsg: "",
  };
  const [userState, setUserState] = useState(initialState);
  const [recipes, setRecipes] = useState([]);
  const apiKey = "25f0ffbe6a0e4ee19da822eed7d8af01";
  function getRecipes(ingredients) {
    var newString = transformString(ingredients);
    // const options = {
    //   method: "GET",
    //   url: "https://api.spoonacular.com/recipes/findByIngredients?",
    //   params: { apiKey: apiKey, ingredients: newString },
    // };
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${newString}&number=2&apiKey=${apiKey}`
      )
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function transformString(ingredients) {
    return ingredients;
  }
  function handleAuthErr(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }
  function resetAuthErr() {
    setUserState((prevState) => ({ ...prevState, errMsg: "" }));
  }
  function login(credentials) {
    console.log(credentials);
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        console.log(res);
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response));
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({ initialState });
  }
  function signup(credentials) {
    console.log(credentials);
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        console.log(res);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }
  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        resetAuthErr,
        handleAuthErr,
        getRecipes,
        recipes,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
