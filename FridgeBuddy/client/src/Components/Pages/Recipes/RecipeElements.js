import styled from "styled-components";
export const RecipesList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 15;
`;
export const UserRecipesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 15;
`;
export const RecipeContainer = styled.div`
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #80808099;
  border: 1px black solid;
  border-radius: 10px;
  width: 65%;
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
  background-color: #80808099;
  border-radius: 5px;
  &:hover {
    transition: 0.2s ease-in-out;
    color: white;
    background-color: green;
  }
  color: lightblue;
`;
export const IngredientsBtn = styled.button`
  background-color: #80808099;
  border-radius: 5px;
  &:hover {
    transition: 0.2s ease-in-out;
    color: white;
    background-color: green;
  }
  color: lightblue;
`;
export const DeleteBtn = styled.button`
  background-color: #80808099;
  border-radius: 5px;
  &:hover {
    transition: 0.2s ease-in-out;
    color: white;
    background-color: green;
  }
  color: lightblue;
`;
export const SaveBtn = styled.button`
  background-color: #80808099;
  border-radius: 5px;
  &:hover {
    transition: 0.2s ease-in-out;
    color: white;
    background-color: green;
  }
  color: lightblue;
`;
