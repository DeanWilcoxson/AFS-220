import { StyledBody } from "./../styled_components/Styled_Body";
export default function Home(props) {
  function handleAddItem() {}
  function handleSearch() {}
  return (
    <StyledBody>
      <input placeholder="What's in your Fridge??" name="searchBar" />
      <span>
        <button onClick={handleAddItem} name="">
          Add
        </button>
        <button onClick={handleSearch}>Search</button>
      </span>
    </StyledBody>
  );
}
