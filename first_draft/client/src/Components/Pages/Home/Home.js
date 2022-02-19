const Home = () => {
  function handleAddItem() {}
  function handleSearch() {}
  return (
    <div>
      <input placeholder="What's in your Fridge??" name="searchBar" />
      <span>
        <button onClick={handleAddItem} name="">
          Add
        </button>
        <button onClick={handleSearch}>Search</button>
      </span>
    </div>
  );
};
export default Home;
