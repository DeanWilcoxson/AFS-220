import Instruction from "./Instruction";
import { InstructionsContainer } from "./instructionElements";
const Instructions = ({ instructions }) => {
  console.log(instructions);
  return (
    <InstructionsContainer>
      {instructions.length ? (
        instructions[0].steps.map((instruction) => {
          console.log(instruction);
          return (
            
              <Instruction
                instruction={instruction}
                id={instruction.number}
                step={instruction.number}
                name={instruction.step}
                ingredients={instruction.ingredients}
                equipment={instruction.equipment}
              />
          );
        })
      ) : (
        <></>
      )}
    </InstructionsContainer>
  );
};

export default Instructions;
