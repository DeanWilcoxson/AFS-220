import React from "react";
import {
  SearchContainer,
  SearchInput,
  ButtonContainer,
  Button,
} from "./SearchElements";
import { useState, useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
const Search = () => {
  const initInput = { ingredient: "" };
  const [input, setInput] = useState(initInput);
  const { getRecipes } = useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };
  const handleSearch = () => {
    getRecipes(input.ingredient);
  };
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="What's in your Fridge??"
        name="ingredient"
        value={input.ingredient}
        onChange={handleChange}
      />
      <ButtonContainer>
        <Button onClick={handleSearch} name="search">
          Search
        </Button>
      </ButtonContainer>
    </SearchContainer>
  );
};

export default Search;
// <Button onClick={handleAddIngredient} name="add">
//   Add
// </Button>
