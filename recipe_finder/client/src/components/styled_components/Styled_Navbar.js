import styled from "styled-components";
export const StyledNavbar = styled.div`
  /* display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
top: 50px;
text-align: left;
position: fixed;
a {
  color: #083D77;
  text-shadow: 2px .75px 2px grey;
  font-size:28px;
  display: block;
  padding: 28px 46px;
  text-decoration: none;
}
a:hover {
  background-color: #555;
  color: white;
} */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
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
  span:hover {
    background-color: #4d4d4d;
  }
`;
