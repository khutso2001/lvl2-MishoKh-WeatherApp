import React, { useState, useEffect } from 'react'
import './Eightday.css'
import Loader from './Components/Loader'
const Eightday = ({searchValue}) => {
    let [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);


    const key = '53368e0a2dfb4d4493892950211406';
    
    useEffect(() => {
        getData();
    }, [searchValue])

    const getData = () => {
        setLoading(true);
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${searchValue}&days=3&aqi=no&alerts=yes`)
            .then(response => response.json())
            .then(dataa => {
                setData([dataa]);
                console.log(dataa)
            })
            .catch(err => {
                setData(undefined);
            })
            .finally(()=>{
                setLoading(false);
            })
    }
    
    console.log(searchValue)


    return (

        <div className="day8" >
            <Loader isLoading={loading}>
            {data && data.map(dataa =>
                <div key={468276}>
                    <ul >
                        <p className="sixday">6 day forecast</p>
                        <li> {dataa.forecast.forecastday[0].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                        <li> {dataa.forecast.forecastday[1].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                        <li> {dataa.forecast.forecastday[2].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                        <li> {dataa.forecast.forecastday[0].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                        <li> {dataa.forecast.forecastday[1].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                        <li> {dataa.forecast.forecastday[2].date} <img src={`${dataa.current.condition.icon}`}></img> {dataa.current.temp_c}&#8451; {dataa.current.condition.text}</li>
                    </ul>
                </div>)
            }
            </Loader>
        </div>

    )
}


export default Eightday;