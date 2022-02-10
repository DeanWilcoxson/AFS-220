import styled from "styled-components";
export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 90%;
  padding: 10px;
  a,
  span {
    color: #4d4d4d;
    font-weight: bold;
    text-decoration: none;
    font-size: large;
    padding: 20px;
    margin: 20px;
    text-shadow: lightgray 1px 0.25px 2px;
  }
  a:hover {
    color: #259cc3;
    text-shadow: grey 1px 0.25px 2px;
  }
`;
