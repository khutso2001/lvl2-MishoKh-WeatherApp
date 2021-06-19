import './App.css';
import React, { useState, useEffect } from 'react'
import ToThisToday from "./newfolder/OneDayWeather";
import Eightday from "./newfolder/Eightday";

function App() {
  const [thiscity, setthisCity] = useState('Tbilisi');
  let [searchValue, setSearch] = useState('Tbilisi');

  const setValue = () => {
    setSearch(thiscity);
  }

  let handleChange = (e) => {
    e.preventDefault();
    setthisCity(e.target.value);
  }

  const noRefr = (e) => {
    e.preventDefault();
  }


  return (
    <div>
      <div className="input-conntent">
        <form onSubmit={noRefr}>
          <input className="input" type="text" value={thiscity} onChange={handleChange}></input>
          <button onClick={setValue} className="button" variant="contained" color="primary">Search</button>
        </form>
      </div>
      <div className="main-flex">
        <ToThisToday searchValue={searchValue} />
        <Eightday searchValue={searchValue} />
      </div>
    </div>
  )
}

export default App;