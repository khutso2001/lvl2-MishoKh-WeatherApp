import './App.css';
import React, { useState, useEffect } from 'react'
import ToThisToday from "./Weather-App/OneDayWeather";
import Eightday from "./Weather-App/Eightday";
import Input from "./Weather-App/Input"

function App() {
  const [thiscity, setthisCity] = useState('Tbilisi');
  let [searchValue, setSearch] = useState('Tbilisi');

  let handleChange = (e) => {
    e.preventDefault();
    setthisCity(e.target.value);
  }

  const noRefr = (e) => {
    setSearch(thiscity);
    e.preventDefault();
  }


  return (
    <div>
      <Input onSubmit={noRefr} value={thiscity} handleChange={handleChange}/>
      <div className="main-flex">
        <ToThisToday searchValue={searchValue} />
        <Eightday searchValue={searchValue} />
      </div>
    </div>
  )
}

export default App;