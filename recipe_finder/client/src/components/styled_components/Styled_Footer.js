import styled from "styled-components";
export const StyledFooter = styled.div`
  background-color: darkolivegreen;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 1;
  width: 100%;
  height: 15%;
  border-top: black 1px solid;
  ul {
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    a {
      color: white;
      text-decoration: none;
      padding: 5px;
      margin: 20px;
    }
    a:hover {
      color: white;
      text-shadow: grey 1px 0.25px 2px;
      text-decoration: underline;
      border: 1px solid black;
      background-color: grey;
    }
  }
`;
