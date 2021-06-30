import React, { useContext } from "react";
import { Context } from "./SearchBox";

const DisplayedUsers = () => {
  const { users} = useContext(Context);
  return (
    <div className="App">
      
      {users.length === 0 || !users ? (
        <h2>No results</h2>
      ) : (
        users.map((user) => <div key={user.id}> {user.login}</div>)
      )}
    </div>
  );
};

export default DisplayedUsers;
