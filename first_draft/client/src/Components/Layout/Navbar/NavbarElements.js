import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  position: fixed;
  width: 90%;
  padding: 20px;
  color: black;
  z-index: 10;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;
export const NavLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: large;
  margin: 0 20px;
  :hover {
    color: white;
    text-shadow: grey 1px 0.25px 2px;
    text-decoration: underline;
    border: 1px solid #0000ff8f;
    background-color: #0000ff8f;
    padding: 0 10px;
  }
`;
export const NavBtn = styled.button`
  border: none;
  background-color: transparent;
  font-weight: bold;
  color: white;
  font-size: large;
  text-shadow: grey 0.5px 0.25px 2px;
  :hover {
    color: white;
    text-decoration: underline;
    border: 1px solid darkred;
    background-color: darkred;
    padding: 0 10px;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    &:hover {
      color: #02b802;
    }
  }
`;
export const BarsIcon = styled(FaBars)`
  color: #fff;
  font-size: 1.5rem;
  &:hover {
    color: #02b802;
  }
`;
