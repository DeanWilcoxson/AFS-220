import styled from "styled-components";
export const StyledFooter = styled.div`
  background-color: #4d4d4d;
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
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
  a {
    list-style-type: none;
    color: white;
    text-decoration: none;
  }

   a:hover {
    color: #259cc3;
    text-shadow: grey 1px 0.25px 2px;

  }
`;