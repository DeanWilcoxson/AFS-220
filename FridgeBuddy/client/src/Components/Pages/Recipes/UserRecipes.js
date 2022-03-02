import { useContext } from "react";
import Recipe from "./Recipe";
import { RecipesList } from "./RecipeElements";
import { UserContext } from "../../Context/UserContext";
const UserRecipes = () => {
  const { userRecipes } = useContext(UserContext);
  return (
    <RecipesList>
      {userRecipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        );
      })}
    </RecipesList>
  );
};
export default UserRecipes;

// 1. Duplicate of Recipes
// 2. Instead of receiving Recipies we receive SavedUserRecipies
// 3. is used for the map
// 4. in the route we render savedrecipies instead of the recipies component
