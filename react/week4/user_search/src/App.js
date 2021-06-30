import React from 'react'
import './App.css';

import SearchBox from './components/SearchBox';
import SearchInput from './components/SearchInput';
import DisplayedUsers from './components/DisplayedUsers';

function App() {
  return (
    <div className="App">
      <SearchBox>
        <SearchInput />
        <DisplayedUsers />
      </SearchBox>
    </div>
  );
}
export default App;
    
  