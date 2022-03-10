import {
  Step,
  StepList,
  StepContainer,
  StepDesc,
  IngredientsList,
  Ingredient,
  Equipment,
  EquipmentList,
} from "./instructionElements";

const Instruction = ({ name, step, ingredients, equipment }) => {
  console.log(ingredients, equipment);
  return (
    <StepList>
      <StepContainer>
        <Step>Step {step}</Step>
        <StepDesc>{name}</StepDesc>
        {ingredients.length ? (
          <>
            <StepDesc>Ingredients</StepDesc>
            {ingredients.map((food) => {
              return (
                <IngredientsList>
                  <Ingredient>{food.name}</Ingredient>
                </IngredientsList>
              );
            })}
          </>
        ) : (
          <></>
        )}
        {equipment.length ? (
          <>
            <StepDesc>Equipment</StepDesc>
            {equipment.map((equip) => {
              return (
                <EquipmentList>
                  <Equipment>{equip.name}</Equipment>{" "}
                </EquipmentList>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </StepContainer>
    </StepList>
  );
};

export default Instruction;
