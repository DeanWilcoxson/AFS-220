import { useContext, useEffect } from "react";
import Recipe from "./Recipe";
import { UserRecipesList } from "./RecipeElements";
import { UserContext } from "../../Context/UserContext";
const UserRecipes = () => {
  const { userRecipes, getSavedUserRecipes } = useContext(UserContext);
  useEffect(() => {
    getSavedUserRecipes();
    console.log(userRecipes);
  }, [userRecipes, getSavedUserRecipes]);
  return (
    <UserRecipesList>
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
    </UserRecipesList>
  );
};
export default UserRecipes;
