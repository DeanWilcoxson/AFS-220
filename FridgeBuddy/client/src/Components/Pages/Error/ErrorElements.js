import styled from "styled-components";
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 20;
  margin: 100px;
`;
export const ErrorBox = styled.span`
  background-color: #80808080;
  padding: 100px;
  z-index: 20;
`;
export const ErrorDesc = styled.h1`
  color: red;
  z-index: 20;
`;
