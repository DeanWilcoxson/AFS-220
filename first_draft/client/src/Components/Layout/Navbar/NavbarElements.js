import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  position: fixed;
  width: 90%;
  padding: 10px;
  color: black;
  z-index: 10;
`;
export const NavLink = styled(Link)`
  a {
    color: darkolivegreen;
    font-weight: bold;
    text-decoration: none;
    font-size: large;
    padding: 5px;
    margin: 20px;
    text-shadow: lightgray 1px 0.25px 2px;
    :hover {
      color: white;
      text-shadow: grey 1px 0.25px 2px;
      text-decoration: underline;
      border: 1px solid grey;
      background-color: darkolivegreen;
    }
  }
`;
export const NavBtn = styled.button`
  border: none;
  background-color: white;
  font-weight: bold;
  color: darkolivegreen;
  font-size: large;
  text-shadow: grey 0.5px 0.25px 2px;
  :hover {
    color: white;
    text-decoration: underline;
    border: 1px solid darkred;
    background-color: darkred;
  }
`;
