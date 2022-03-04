import { useContext } from "react";
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
  console.log(recipe.usedIngredients);
  const { getInstructions, saveUserRecipe, removeUserRecipe } = useContext(
    UserContext
  );
  const displayIngredients = () => {};
  const removeRecipe = () => {
    removeUserRecipe();
  };
  const saveRecipe = () => {
    saveUserRecipe(recipe);
  };
  return (
    <RecipeContainer id={id}>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeImage src={image} />
      <ButtonBox>
        <IngredientsBtn onClick={displayIngredients}>
          Ingredients
        </IngredientsBtn>
        <InstructionsBtn
          onClick={() => {
            getInstructions();
            return <Instructions />;
          }}
        >
          Instructions
        </InstructionsBtn>
        <SaveBtn onClick={saveRecipe}>Save Recipe</SaveBtn>
        <DeleteBtn onClick={removeRecipe}>Remove Saved Recipe</DeleteBtn>
      </ButtonBox>
      <RecipeIngredients>
        {recipe.usedIngredients.map((usedIngredient) => {
          console.log(usedIngredient);
          return <Ingredient key={usedIngredient.id}>{usedIngredient.original}</Ingredient>;
        })}
        {recipe.missedIngredients.map((unUsedIngredient) => {
          console.log(unUsedIngredient)
          return <Ingredient key={unUsedIngredient.id}>{unUsedIngredient.original}</Ingredient>;
        })}
      </RecipeIngredients>
    </RecipeContainer>
  );
};

export default Recipe;
