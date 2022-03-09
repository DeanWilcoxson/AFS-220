import { useContext } from "react";
import { UserContext } from "../../../Context/UserContext";
import Instruction from "./Instruction";
import { InstructionsContainer } from "./instructionElements";
const Instructions = () => {
  const { instructions } = useContext(UserContext);
  console.log(instructions);
  return (
    <InstructionsContainer>
      {instructions.map((instruction) => {
        console.log(instruction);
        return (
          <Instruction
            instruction={instruction}
            id={instructions.steps.number}
            step={instructions.steps.number}
            name={instructions.steps.step}
            ingredients={instructions.steps.ingredients}
            equipment={instructions.steps.equipment}
          />
        );
      })}
    </InstructionsContainer>
  );
};

export default Instructions;
