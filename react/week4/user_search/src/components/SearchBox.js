import React, { useState, useEffect, createContext } from "react";

import SearchResult from "./SearchResult";
import UsersDisplay from "./UsersDisplay";

export const Context = createContext();

const SearchBox = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState("");
  const [users, setUsers] = useState([]);
  const handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  };
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.github.com/search/users?q=${searchResult}`
        );
        handleErrors(response);
        const data = await response.json();
        const usersData = await data.items;
        setUsers(usersData);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchResult]);

  return (
    <Context.Provider value={{ users, searchResult, setSearchResult }}>
      <SearchResult />
      {isLoading ? <Loading /> : <UsersDisplay />}
    </Context.Provider>
  );
};

function Loading() {
  return <div>Loading... </div>;
}
export default SearchBox;
