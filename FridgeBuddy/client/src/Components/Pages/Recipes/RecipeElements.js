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
export const RecipeBox = styled.ul`
  display: flex;
  flex-direction: column;
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
  background-color: #008000aa;
  color: lightblue;
  width: 100%;
  font-weight: bold;
  text-shadow: black 2px 1.5px 1px;
`;
export const RecipeImage = styled.img`
  grid-column: 1/4;
  grid-row: 2/3;
`;
export const ButtonBox = styled.div`
  grid-column: 1/4;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0;
  width: 100%;
`;
export const Btn = styled.button`
  background-color: #80808099;
  border-radius: 5px;
  font-weight: bold;
  text-shadow: black 1px 1.5px 1px;

  &:hover {
    transition: 0.2s ease-in-out;
    color: white;
    background-color: green;
  }
  color: lightblue;
`;
export const IngredientsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const IngredientsTitle = styled.h1`
  background-color: #008000aa;
  text-shadow: black 2px 1.5px 1px;
  color: lightblue;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const RecipeIngredients = styled.ul`
  padding: 10px;
  margin: 10px;
`;
export const Ingredient = styled.li`
  color: lightblue;
  padding: 0 20px;
  margin: 0 20px;
  font-weight: bold;
  text-shadow: black 2px 1.5px 1px;
`;
