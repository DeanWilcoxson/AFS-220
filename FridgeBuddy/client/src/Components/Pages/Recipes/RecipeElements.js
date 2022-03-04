import styled from "styled-components";
export const RecipesList = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
export const UserRecipesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
export const RecipeContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr); */
  background-color: #80808083;
  border: 1px black solid;
  border-radius: 10px;
  width: 55%;
  margin: 20px 0;
`;
export const RecipeTitle = styled.h1`
  background-color: orange;
  color: blue;
  width: 100%;
`;
export const RecipeImage = styled.img`
  grid-column: 1/4;
  grid-row: 2/3;
`;
export const RecipeIngredients = styled.ul`
  /* display: none; */
`;
export const Ingredient = styled.li`
  color: lightblue;
`;
export const ButtonBox = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const InstructionsBtn = styled.button`
  background-color: transparent;
  border: none;
`;
export const IngredientsBtn = styled.button`
  background-color: transparent;
  border: none;
`;
export const DeleteBtn = styled.button`
  background-color: transparent;
  border: none;
`;
export const SaveBtn = styled.button`
  background-color: transparent;
  border: none;
`;