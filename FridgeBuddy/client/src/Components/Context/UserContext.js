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
    recipes: [],
    userRecipes: [],
    ingredients: [],
    // instructions: [],
    errMsg: "",
  };
  const [userState, setUserState] = useState(initialState);
  const [recipes, setRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  // const [randomRecipes, setRandomRecipes] = useState([]);
  // const [instructions, setInstructions] = useState({ name: "", steps: [] });
  // const apiKey = "25f0ffbe6a0e4ee19da822eed7d8af01";
  const apiKeyTwo = "7ea021b61b5a4aff96d8b9e672891f94";
  function getRecipes(ingredients) {
    var newString = transformString(ingredients);
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${newString}&number=3&apiKey=${apiKeyTwo}`
      )
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          // var recipe = res.data[i];
          console.log(res.data);
          axios
            .get(
              `https://api.spoonacular.com/recipes/${res.data[i].id}/analyzedInstructions?&apiKey=${apiKeyTwo}`
            )
            .then((response) => {
              console.log(response);
              setRecipes((prevRecipes) => [
                ...prevRecipes,
                // { ...res.data[i], instructions: response.data[0].steps },
              ]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        // setRecipes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function getSavedUserRecipes() {
    userAxios
      .get("/api/recipe/saved")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(userRecipes);
  }
  // function getRandomRecipes() {
  //   axios
  //     .get(`https://api.spoonacular.com/recipes/random?number=15&${apiKey}`)
  //     .then((res) => {
  //       setRandomRecipes(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  // function getInstructions(id) {
  // axios
  //   .get(
  //     `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?&apiKey=${apiKeyTwo}`
  //   )
  //   .then((res) => {
  // setInstructions(["test"]);
  // res.data
  // })
  // .catch((err) => {
  //   console.log(err);
  // });
  // }
  function saveUserRecipe(recipe) {
    setUserRecipes((prevState) => [...prevState, recipe]);
    userAxios
      .post("/api/recipe", recipe)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(userRecipes);
  }
  function removeUserRecipe(id) {
    var copy = [...userRecipes];
    copy.splice(
      copy.findIndex((recipe) => {
        return recipe.id === Number(id);
      }),
      1
    );
    console.log(copy);
    setUserRecipes(copy);
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
        // instructions,
        // getInstructions,
        // randomRecipes,
        // getRandomRecipes,
        userRecipes,
        saveUserRecipe,
        removeUserRecipe,
        getSavedUserRecipes,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
