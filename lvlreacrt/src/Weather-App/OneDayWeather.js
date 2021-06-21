import React, { useState, useEffect } from 'react'
import "./OneDayWeather.css"
import Modal from './Modal'
import Loader from './Components/Loader'
const ToThisToday = ({ searchValue }) => {
    const [data, setData] = useState([]);
    const [data2,setData2] = useState([]);
    const [loading,setLoading] = useState(false);


    const key = 'fb8b35a37304d98e955760be96b16348';
    const key2 = '53368e0a2dfb4d4493892950211406';

    useEffect(() => {
        getData();
    }, [searchValue])

    const getData = () => {
        setLoading(true);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${key}`)
            .then(response => response.json())
            .then(dataa => {
                setData([dataa]);
            })
            .catch(err => {
                setData(undefined);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        getAnotherData();
    }, [searchValue])

    const getAnotherData = () => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key2}&q=${searchValue}&days=3&aqi=no&alerts=yes`)
            .then(response => response.json())
            .then(dataa => {
                setData2([dataa]);
                console.log(dataa)
            })
            .catch(err => {
                setData2(null);
            })
    }



    return (
        <div className="Content">
            <div className="weather-oneday">
                <Loader isLoading={loading}>
                {data && data.map(dataa =>
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
                </Loader>
            </div>
            <Modal>
            {data2 && data2.map(dataa =>
                                <div key={137481740809}>
                                    <ul >
                                        <p class="sixday">6 day forecast</p>
                                        <li> {dataa.forecast.forecastday[0].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                                        <li> {dataa.forecast.forecastday[1].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                                        <li> {dataa.forecast.forecastday[2].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                                        <li> {dataa.forecast.forecastday[0].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                                        <li> {dataa.forecast.forecastday[1].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                                    </ul>

                                </div>)
                            }
            </Modal>

        </div>
    )



}
export default ToThisToday;