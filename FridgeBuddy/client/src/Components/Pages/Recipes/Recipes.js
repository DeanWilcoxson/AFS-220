import { useContext } from "react";
import Recipe from "./Recipe";
import { RecipesList } from "./RecipeElements";
import { UserContext } from "../../Context/UserContext";
const Recipes = () => {
  const { recipes } = useContext(UserContext);
  console.log(recipes);
  return (
    <RecipesList>
      {recipes.map((recipe) => {
        console.log(recipe);
        return (
          <Recipe key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
        );
      })}
    </RecipesList>
  );
};

export default Recipes;
