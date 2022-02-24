import React from "react";
import {
  RecipeContainer,
  RecipeTitle,
  RecipeImage,
  RecipeIngredients,
  Ingredient,
  InstructionsBtn,
  IngredientsBtn,
  DeleteBtn,
} from "./RecipeElements";
const Recipe = ({ title, image }) => {
  const displayIngredients = () => {};
  const displayInstructions = () => {};
  const removeRecipe = () => {};
  return (
    <RecipeContainer>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeImage src={image} />
      <IngredientsBtn onClick={displayIngredients}>Ingredients</IngredientsBtn>
      <InstructionsBtn onClick={displayInstructions}>
        Instructions
      </InstructionsBtn>
      <DeleteBtn onClick={removeRecipe}>Remove Saved Recipe</DeleteBtn>
      <RecipeIngredients toggle={""}>
        <Ingredient>{}</Ingredient>
      </RecipeIngredients>
    </RecipeContainer>
  );
};

export default Recipe;
