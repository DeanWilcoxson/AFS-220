import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.div`
  background-color: green;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 1;
  width: 100%;
  height: 15%;
  border-top: black 1px solid;
`;
export const FooterList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`;
export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 5px;
  margin: 20px;
  :hover {
    color: white;
    text-shadow: grey 1px 0.25px 2px;
    text-decoration: underline;
    border: 1px solid #0000ff8f;
    background-color: #0000ff8f;
  }
`;
export const FooterInfo = styled.h4`
  padding: auto;
  margin: auto;
`;
