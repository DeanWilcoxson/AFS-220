import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  right: 0;
  width: 100%;
  background-color:#008000aa;
  color: lightblue;
  text-shadow: black 2px 1.5px 1px;
  z-index: 10;
  border-bottom: black 1px solid;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: right;
  }
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
  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;
export const HeaderWelcome = styled.h3`
  width: 100%;
  height: 10%;
  color: lightblue;
  text-shadow: black 2px 1.5px 1px;
  padding: 20px 15px;
  margin: 10px;
  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;
export const Name = styled.b`
  color: white;
  text-shadow: black 2px 1.5px 1px;
`;
