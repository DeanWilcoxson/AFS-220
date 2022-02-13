import styled from "styled-components";
export const StyledBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  position: relative;

  input {
    padding: 15px;
    margin: 20px;
    width: 90%;
    border: 2px outset;
    border-radius: 10px;
    align-self: center;
    grid-column: 2/3;
    grid-row: 3/4;
  }
  span {
    grid-column: 2/3;
    grid-row: 4/5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  button {
    color:white;
    width:25%;
    border: none;
    background-color: #8080807d;
    :hover{
      background-color: Green;

    }
  }
`;
