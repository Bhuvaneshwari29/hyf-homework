import React, { useContext } from "react";
import { Context } from "./SearchBox";

const SearchResult = () => {
  const { searchResult, setSearchResult } = useContext(Context);
  return (
    <div className="App">
      <h1>Github user searcher</h1>
      <div>
        <input
          placeholder="Search for user"
          value={searchResult}
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchResult;
