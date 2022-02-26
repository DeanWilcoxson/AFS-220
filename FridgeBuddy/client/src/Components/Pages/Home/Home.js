import {
  HomeContainer,
  SearchInput,
  SearchContainer,
  ButtonContainer,
  Button,
} from "./HomeElements";
import Recipes from "../Recipes/Recipes";
import { useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext";
const initInput = { ingredient: "" };
const Home = () => {
  const [input, setInput] = useState(initInput);
  const { recipes, ingredients, getRecipes } = useContext(UserContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };
  const handleAddIngredient = () => {
    ingredients.push(input.ingredient);
  };
  const handleSearch = () => {
    getRecipes(input.ingredient);
  };
  return (
    <HomeContainer>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="What's in your Fridge??"
          name="ingredient"
          value={input.ingredient}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button onClick={handleAddIngredient} name="add">
            Add
          </Button>
          <Button onClick={handleSearch} name="search">
            Search
          </Button>
        </ButtonContainer>
      </SearchContainer>
      <Recipes />
    </HomeContainer>
  );
};
export default Home;
