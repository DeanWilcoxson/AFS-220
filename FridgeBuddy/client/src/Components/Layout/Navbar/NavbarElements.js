import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  position: sticky;
  background-color: #008000aa;
  border-bottom: black 1px solid;
  width: 90%;
  padding: 20px;
  color: black;
  z-index: 10;
`;
export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  /* position: fixed; */
  width: 90%;
  margin: 0 50px;
  color: black;
  z-index: 11;
  @media screen and (max-width: 768px) {
    display: none;
    top: 0px;
  }
`;
export const NavLink = styled(Link)`
  color: lightblue;
  text-shadow: black 2px 1.5px 1px;
  font-weight: bold;
  text-decoration: none;
  font-size: large;
  margin: 0 10px;
  &:hover {
    transition: 0.1s ease-in-out;
    color: white;
    text-shadow: black 2px 1.5px 1px;;
    /* text-decoration: underline; */
  }
`;
export const NavBtn = styled.button`
  border: none;
  background-color: transparent;
  font-weight: bold;
  color: lightblue;
  font-size: large;
  text-shadow: black 2px 1.5px 1px;
  &:hover {
    color: red;
    /* text-decoration: underline; */
    transition: 0.2s ease-in-out;
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
