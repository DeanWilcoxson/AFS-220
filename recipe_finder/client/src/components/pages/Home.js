import { React, Component } from "react";
import fridge from "../../images/bestFridge.jpg";
import { StyledBody } from "./../styled_components/Styled_Body";
class Home extends Component {
  render() {
    return (
      <StyledBody>
        <img src={fridge} alt="fridge" />
        <input placeholder="What's in your Fridge??" name="searchBar" />
      </StyledBody>
    );
  }
}
export default Home;
