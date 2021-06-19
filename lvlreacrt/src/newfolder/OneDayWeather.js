import React, { useState, useEffect } from 'react'
import "./OneDayWeather.css"
import Modal from './Modal'
const ToThisToday = ({ searchValue }) => {
    let [data, setData] = useState([]);

    const key = 'fb8b35a37304d98e955760be96b16348';

    useEffect(() => {
        getData();
    }, [searchValue])

    const getData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${key}`)
            .then(response => response.json())
            .then(dataa => {
                setData([dataa]);
            })
    }


    console.log(data);

    return (
        <div className="Content">
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
            <Modal searchValue={searchValue}/>

        </div>
    )



}
export default ToThisToday;