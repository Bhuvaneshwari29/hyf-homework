import React, { useContext } from "react";
import { Context } from "./SearchBox";

const SearchInput = () => {
  const { searchInput, setSearchInput } = useContext(Context);
  return (
    <div className="App">
      <h1>Github user searcher</h1>
      <div>
        <input
          placeholder="Search for user"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
