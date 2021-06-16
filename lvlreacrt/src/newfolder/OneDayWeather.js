
import React, { useState, useEffect } from 'react'
import "./OneDayWeather.css"
import Modal from './Modal'
const ToThisToday = () => {
    const [thiscity, setthisCity] = useState('Tbilisi');
    let [data, setData] = useState([]);
    let [searchValue,setSearch] = useState('');

    const setValue = () =>{
        setSearch(thiscity);
    }



    const key = 'fb8b35a37304d98e955760be96b16348';

    let handleChange = (e) => {
        e.preventDefault();
        setthisCity(e.target.value);
    }
    

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${thiscity}&units=metric&appid=${key}`)
            .then(response => response.json())
            .then(dataa => {
                setData([dataa]);
            })
            
    }, [searchValue])

    return (
        <div className="Content">
            <div className="input-conntent">
                <div>
                    <input className="input"type="text" value={thiscity} onChange={handleChange}></input>
                </div>
                <div> 
                    <button onClick={setValue}className="button"variant="contained" color="primary">Search</button>
                </div>
            </div>
            <div className="weather-oneday">
                {data.map(dataa => 
                <div key={dataa.id}>
                    <h2>{dataa.name}, {dataa.sys.country}</h2>
                    <div className="dgr">
                        <div><img src={`http://openweathermap.org/img/wn/${dataa.weather[0].icon}@2x.png`}></img></div>
                        <div> <h1>{dataa.main.temp} <span>&#8451;</span> </h1></div>
                        
                       
                    </div>
                    <p>Feels like {dataa.main.feels_like}.Few {dataa.weather[0].description} .{dataa.weather[0].main} </p>
                    <div className='more_info'>
                            <ul className="ul-moreinfo">
                                <li>{dataa.wind.speed}m/s NNW</li>
                                <li>Humidity:{dataa.main.humidity}%</li>
                                <li>Dew point: {dataa.main.temp_min}&#8451;</li>
                            </ul>
                            <ul className="ul-moreinfo2">
                                <li>{dataa.main.pressure}hPa</li>
                                <li>Uv:8</li>
                                <li>Visibility: {Number(dataa.visibility) / 1000}km</li>
                            </ul>
                    </div>
                   
                </div>)
                }
            </div>
            <Modal />
                            
                            
        </div>
    )



}
export default ToThisToday;