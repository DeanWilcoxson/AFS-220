import styled from "styled-components";
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 20;
  padding: 100px;
`;
export const SearchInput = styled.input`
  border-radius: 10px;
  color: white;
  z-index: 20;
  width: 100%;
  padding: 10px;
  background-color: #8080807c;
`;
export const Button = styled.button`
  transition: 0.2s ease-in-out;
  z-index: 20;
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background-color: green;
    color: #fff;
  }
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
