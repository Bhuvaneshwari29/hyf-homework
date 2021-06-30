import React, { useState, useEffect, createContext } from "react";

import SearchInput from "./SearchInput";
import DisplayedUsers from "./DisplayedUsers";

export const Context = createContext();

const SearchBox = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
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
          `https://api.github.com/search/users?q=${searchInput}`
        );
        handleErrors(response);
        const data = await response.json();
        const usersData = await data.items;
        setUsers(usersData);
      } catch (err) {
        
        console.log('Error fetching',err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchInput]);

  return (
    <Context.Provider value={{ users, searchInput, setSearchInput}}>
      <SearchInput />
      {isLoading ? <Loading /> : <DisplayedUsers />}
    </Context.Provider>
  );
};

function Loading() {
  return <div>Loading... </div>;
}
export default SearchBox;
