import {
  Step,
  StepList,
  StepContainer,
  StepDesc,
  IngredientsList,
  IngredientImg,
  Ingredient,
  Equipment,
  EquipmentImg,
  EquipmentList,
} from "./instructionElements";
// import { useState } from "react";

const Instruction = ({ name, step, ingredients, equipment }) => {
  // const [instructions, setInstructions] = useState({ name: "", steps: [] });

  return (
    <StepList>
      <StepContainer>
        <Step>Step{step}</Step>
        <StepDesc>{name}</StepDesc>

        {ingredients.map((food) => {
          return (
            <IngredientsList>
              <Ingredient>{food}</Ingredient>
              <IngredientImg src={food.image} />
            </IngredientsList>
          );
        })}

        {equipment.map((equip) => {
          return (
            <EquipmentList>
              <Equipment>{equip}</Equipment>
              <EquipmentImg src={equip.image} />
            </EquipmentList>
          );
        })}
      </StepContainer>
    </StepList>
  );
};

export default Instruction;
