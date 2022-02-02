import styled from "styled-components";
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin: auto;

  h4 {
    color: #4d4d4d;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  }
  button {
    border: 2px outset;
    border-radius: 10px;
    color: white;
    background-color: #259cc3;
    padding-left: 15px;
    padding-right: 15px;
  }
  button:hover {
    background-color: green;
  }
`;
