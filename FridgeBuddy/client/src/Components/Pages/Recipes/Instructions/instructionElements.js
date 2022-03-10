import styled from "styled-components";
export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  width: 100%;
`;
export const StepContainer = styled.div`
  z-index: 20;
  display: grid;
  width: 100%;
  grid-template-columns: auto;
  grid-template-rows: auto;
`;
export const StepBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  /* padding: 0 20px;
  margin: 0 20px; */
  width: 50%;
`;
export const Step = styled.h1`
  grid-column: 1/3;
  grid-row: auto;
  z-index: 20;
  color: lightblue;
  background-color: #008000aa;
  margin: 0px;
  padding: 0 20px;
  align-self: center;
  font-weight: bold;
  text-shadow: black 2px 1px 1px;
`;
export const StepDesc = styled.p`
  grid-column: 1/3;
  grid-row: auto;
  color: lightblue;
  padding: 10px 20px;
  margin: 0 20px;
  font-weight: bold;
  text-shadow: black 2px 1px 1px;
  z-index: 20;
`;
export const StepDescTwo = styled.p`
  color: lightblue;
  padding: 0 20px;
  margin: 0 20px;
  font-weight: bold;
  text-shadow: black 2px 1px 1px;
  z-index: 20;
`;
export const IngredientsList = styled.ul`
  grid-column: 1/2;
  grid-row: auto;
  z-index: 20;
`;
export const Ingredient = styled.li`
  z-index: 20;
  color: lightblue;
  font-weight: bold;
  text-shadow: black 1px 1px 1px;
`;
export const EquipmentList = styled.ul`
  grid-column: 2/3;
  grid-row: auto;
  z-index: 20;
`;
export const Equipment = styled.li`
  z-index: 20;
  color: lightblue;
  text-shadow: black 1px 1px 1px;
`;
