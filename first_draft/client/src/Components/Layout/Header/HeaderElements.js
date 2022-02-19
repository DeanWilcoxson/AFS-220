import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  right: 0;
  background-color: green;
  color: white;
  z-index: 10;
  border-bottom: black 1px solid;
`;
export const HeaderTitle = styled.h1`
  justify-self: center;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
  font-weight: bolder;
  text-decoration: none;
  padding: 0 25px;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;
export const HeaderWelcome = styled.h3`
  width: 100%;
  height: 10%;
  color: white;
  padding: 10px 5px;
  /* margin: 10px; */
`;
