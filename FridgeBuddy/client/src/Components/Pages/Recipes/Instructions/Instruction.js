import {
  Step,
  StepContainer,
  StepDesc,
  StepDescTwo,
  IngredientsList,
  Ingredient,
  Equipment,
  EquipmentList,
  StepBox,
} from "./instructionElements";

const Instruction = ({ name, step, ingredients, equipment }) => {
  console.log(ingredients, equipment);
  return (
    <StepContainer>
      <Step>Step {step}</Step>
      <StepDesc>{name}</StepDesc>
      {ingredients.length ? (
        <StepBox>
          <StepDescTwo>Ingredients</StepDescTwo>
          <IngredientsList>
            {ingredients.map((food) => {
              return <Ingredient>{food.name}</Ingredient>;
            })}
          </IngredientsList>
        </StepBox>
      ) : (
        <></>
      )}
      {equipment.length ? (
        <StepBox>
          <StepDescTwo>Equipment</StepDescTwo>
          <EquipmentList>
            {equipment.map((equip) => {
              return <Equipment>{equip.name}</Equipment>;
            })}
          </EquipmentList>
        </StepBox>
      ) : (
        <></>
      )}
    </StepContainer>
  );
};

export default Instruction;
