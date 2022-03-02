import styled from "styled-components";
export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
  padding: 0px;
`;
export const AuthBox = styled.div`
  background-color: #008000aa;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  border: 3px solid green;
  border-radius: 15px;
  position: absolute;
`;
export const AuthTitle = styled.h4`
  color: lightblue;
  text-shadow: black 1px 1px 1px;
  text-decoration: underline;
  z-index: 999;
  padding: 5px;
  font-size: 1.25rem;
`;
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  z-index: 999;
  /* width: inherit; */
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto;
  }
`;
export const AuthInput = styled.input`
  z-index: 999;
  width: 100%;
`;
export const AuthButton = styled.button`
  z-index: 999;
  border: none;
  background-color: transparent;
  padding: 5px;
  color: lightblue;
  text-shadow: black 1px 1px 1px;
  font-size: 1.25rem;
`;
export const ToggleButton = styled.button`
  z-index: 999;
  border: none;
  background-color: transparent;
  padding: 5px;
  color: lightblue;
  text-shadow: black 1px 1px 1px;
  font-size: 1.25rem;
`;
export const AuthError = styled.div`
  z-index: 999;
  background-color: #ff000062;
  padding: 50px;
  color: white;
  text-shadow: black 1px 1px 1px;
  font-size: 1.25rem;
`;
