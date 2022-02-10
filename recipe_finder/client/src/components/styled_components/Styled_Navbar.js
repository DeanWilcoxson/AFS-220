import styled from "styled-components";
export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 90%;
  padding: 10px;
  a,
  span {
    color: darkolivegreen;
    font-weight: bold;
    text-decoration: none;
    font-size: large;
    padding: 5px;
    margin: 20px;
    text-shadow: lightgray 1px 0.25px 2px;
  }
  a:hover {
    color: white;
    text-shadow: grey 1px 0.25px 2px;
    text-decoration: underline;
    border: 1px solid grey;
    background-color: darkolivegreen;
  }
  button {
    border: none;
    background-color: white;
    font-weight: bold;
    color: darkolivegreen;
    font-size: large;
    text-shadow: grey 1px 0.25px 2px;
    :hover {
      color: white;
      text-decoration: underline;
      border: 1px solid darkred;
      background-color: darkred;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }
`;
