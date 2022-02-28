import styled from "styled-components";
export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  padding: 0px;
  z-index: 999;
`;
export const AuthTitle = styled.h4`
  color: white;
  text-shadow: black 1px 1px 1px;
  text-decoration: underline;
  z-index: 999;
  padding: 2px;
`;
export const AuthForm = styled.form`
  z-index: 999;
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
  }
`;
export const AuthInput = styled.input`
  z-index: 999;
`;
export const AuthButton = styled.button`
  z-index: 999;
`;
export const ToggleButton = styled.button`
  z-index: 999;
`;
export const AuthError = styled.div`
  z-index: 999;
  background-color: grey;
  padding: 50px;
  color: red;
`;
