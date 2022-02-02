import { React, Component } from "react";
// import fridge from "../../images/bestFridge.jpg";
import { StyledBody } from "./../styled_components/Styled_Body";
class Home extends Component {
  render() {
    // <img src={fridge} alt="fridge" />
    return (
      <StyledBody>
        <input placeholder="What's in your Fridge??" name="searchBar" />
      </StyledBody>
    );
  }
}
export default Home;
