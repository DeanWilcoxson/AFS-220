import styled from "styled-components";
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 20;
  /* margin: 100px; */
  padding: 100px;
`;
export const SearchInput = styled.input`
  border-radius: 10px;
  z-index: 20;
  width: 100%;
  padding: 10px;
`;
export const Button = styled.button`
  z-index: 20;
  border-radius: 10px;

  padding: 10px;
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
