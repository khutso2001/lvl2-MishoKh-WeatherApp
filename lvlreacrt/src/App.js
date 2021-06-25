import './App.css';
import React, { useState, useEffect } from 'react'
import Music from "./Music-App/Music";
import Input from "./Music-App/Input"

function App() {
  let [music ,setMusic]=useState('');
  let [searchValue, setSearch] = useState('');

  let handleChange = (e) => {
    e.preventDefault();
    setMusic(e.target.value);
  }

  const noRefr = (e) => {
    setSearch(music);
    e.preventDefault();
  }


  return (
    <div>
      <Input onSubmit={noRefr} value={music} handleChange={handleChange}/>
      <div className="main-flex">
        <Music searchValue={searchValue} />
      </div>
    </div>
  )
}

export default App;