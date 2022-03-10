import { useState, useContext } from "react";
import { UserContext } from "./../../Context/UserContext";
import Instructions from "./Instructions/Instructions";
import {
  RecipeContainer,
  RecipeTitle,
  RecipeImage,
  IngredientsBox,
  RecipeIngredients,
  Ingredient,
  IngredientsTitle,
  Btn,
  ButtonBox,
} from "./RecipeElements";
const Recipe = ({ title, image, id, recipe }) => {
  const { saveUserRecipe, removeUserRecipe } = useContext(UserContext);
  const [openIngredients, setOpenIngredients] = useState(false);
  const [openInstructions, setOpenInstructions] = useState(false);
  const ingredientsToggle = () => {
    setOpenIngredients(!openIngredients);
    setOpenInstructions(false);
  };
  const instructionsToggle = () => {
    setOpenInstructions(!openInstructions);
    setOpenIngredients(false);
  };
  const removeRecipe = (e) => {
    removeUserRecipe(e.target.parentNode.parentNode.id);
  };
  const saveRecipe = () => {
    saveUserRecipe(recipe);
  };
  return (
    <RecipeContainer id={id}>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeImage src={image} />
      <ButtonBox>
        <Btn onClick={ingredientsToggle}>Ingredients</Btn>
        <Btn onClick={instructionsToggle}>Instructions</Btn>
        <Btn onClick={saveRecipe}>Save Recipe</Btn>
        <Btn onClick={removeRecipe}>Remove Saved Recipe</Btn>
      </ButtonBox>
      {!openIngredients ? (
        <></>
      ) : (
        <IngredientsBox>
          <IngredientsTitle>Ingredients</IngredientsTitle>
          <RecipeIngredients>
            {recipe.usedIngredients.map((usedIngredient) => {
              return (
                <Ingredient key={usedIngredient.id}>
                  {usedIngredient.original}
                </Ingredient>
              );
            })}
            {recipe.missedIngredients.map((unUsedIngredient) => {
              return (
                <Ingredient key={unUsedIngredient.id}>
                  {unUsedIngredient.original}
                </Ingredient>
              );
            })}
          </RecipeIngredients>
        </IngredientsBox>
      )}
      {!openInstructions ? (
        <></>
      ) : (
        <Instructions instructions={recipe.instructions} />
      )}
    </RecipeContainer>
  );
};
export default Recipe;
