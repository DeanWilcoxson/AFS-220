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
} from "./RecipeElements";
const Recipe = ({ title, image, id }) => {
  const { getInstructions } = useContext(UserContext);
  const displayIngredients = () => {};
  const removeRecipe = () => {};
  const saveRecipe = () => {};
  return (
    <RecipeContainer id={id}>
      <RecipeTitle>{title}</RecipeTitle>
      <RecipeImage src={image} />
      <IngredientsBtn onClick={displayIngredients}>Ingredients</IngredientsBtn>
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
      <RecipeIngredients toggle={""}>
        <Ingredient>{}</Ingredient>
      </RecipeIngredients>
    </RecipeContainer>
  );
};

export default Recipe;
