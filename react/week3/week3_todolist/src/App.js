import React from 'react'
import './App.css';
import Todos from './components/Todos'
import Header from './components/Header'
import Timer from './components/Timer'


function App(){
  return(
    <div className='container'>
      <Header />
      <Timer /><br />
      <Todos /><br />
    </div>
  )
}

export default App;