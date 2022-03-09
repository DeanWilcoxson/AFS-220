import { useState, useContext } from "react";
import { UserContext } from "./../../Context/UserContext";
import Instructions from "./Instructions/Instructions";
import {
  RecipeContainer,
  RecipeTitle,
  RecipeImage,
  RecipeIngredients,
  Ingredient,
  InstructionsBtn,
  IngredientsBtn,
  DeleteBtn,
  SaveBtn,
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
        <IngredientsBtn
          onClick={() => {
            ingredientsToggle();
          }}
        >
          Ingredients
        </IngredientsBtn>
        <InstructionsBtn
          onClick={(e) => {
            // getInstructions(e.target.parentNode.parentNode.id);
            // console.log(e.target.parentNode.parentNode.id);
            instructionsToggle();
          }}
        >
          Instructions
        </InstructionsBtn>
        <SaveBtn onClick={saveRecipe}>Save Recipe</SaveBtn>
        <DeleteBtn onClick={removeRecipe}>Remove Saved Recipe</DeleteBtn>
      </ButtonBox>
      {!openIngredients ? (
        <></>
      ) : (
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
      )}
      {!openInstructions ? <></> : <Instructions />}
    </RecipeContainer>
  );
};
export default Recipe;
