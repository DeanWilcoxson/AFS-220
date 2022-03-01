import styled from "styled-components";
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 20;
  margin: 100px;
`;
export const SearchInput = styled.input`
  z-index: 20;
  width: 100%;
  padding: 5px;
`;
export const Button = styled.button`
  z-index: 20;
  padding: 5px;
`;
export const ButtonContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 20;
  @media screen and (min-width: 768px) {
  }
`;
