import React from 'react'
import './App.css';

import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';
import UsersDisplay from './components/UsersDisplay';

function App() {
  return (
    <div className="App">
      <SearchBox>
        <SearchResult />
        <UsersDisplay />
      </SearchBox>
    </div>
  );
}
export default App;
    
  