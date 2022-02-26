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
const Instruction = ({ name, step, ingredients, equipment }) => {
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
