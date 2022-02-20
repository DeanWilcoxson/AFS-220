import {
  HomeContainer,
  SearchInput,
  ButtonContainer,
  Button,
} from "./HomeElements";
const Home = () => {
  function handleAddItem() {}
  function handleSearch() {}
  return (
    <HomeContainer>
      <SearchInput placeholder="What's in your Fridge??" name="searchBar" />
      <ButtonContainer>
        <Button onClick={handleAddItem} name="">
          Add
        </Button>
        <Button onClick={handleSearch}>Search</Button>
      </ButtonContainer>
    </HomeContainer>
  );
};
export default Home;
