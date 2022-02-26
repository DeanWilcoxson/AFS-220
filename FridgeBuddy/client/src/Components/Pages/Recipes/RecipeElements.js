import styled from "styled-components";
export const RecipesList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  width: 500px;
`;
export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #80808083;
  border: 1px black solid;
  border-radius: 10px;
`;
export const RecipeTitle = styled.h1``;
export const RecipeImage = styled.img`
  width: 300px;
  height: 200px;
`;
export const RecipeIngredients = styled.ul``;
export const Ingredient = styled.li``;
export const InstructionsBtn = styled.button``;
export const IngredientsBtn = styled.button``;
export const DeleteBtn = styled.button``;
export const SaveBtn = styled.button``;
