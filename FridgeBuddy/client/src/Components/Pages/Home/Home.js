import { HomeContainer } from "./HomeElements";
import Recipes from "../Recipes/Recipes";
import Search from "./Search/Search";
const Home = () => {
  return (
    <HomeContainer>
      <Search />
      <Recipes />
    </HomeContainer>
  );
};
export default Home;
