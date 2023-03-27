function Search({ setSearch }) {
  return (
    <div className="search-container">
      <h1>Search Country</h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name="search"
        placeholder="search name"
      />
    </div>
  );
}

export default Search;
