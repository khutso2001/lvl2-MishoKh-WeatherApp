import React, {useState, useEffect } from "react";
import "./Modal.css";

export default function Modal(){
    const[modal,setmodal]=useState(false);
    const [thiscity, setthisCity] = useState('Tbilisi');
    let [data, setData] = useState([]);

const key = '53368e0a2dfb4d4493892950211406'; 
    const toggleModal=()=>{
        setmodal(!modal)
    }
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${thiscity}&days=3&aqi=no&alerts=yes`)
            .then(response => response.json())
            .then(dataa => {
                setData([dataa]);
                
            })
            
    }, [thiscity])

return(
    <div className="main-btn-modal">
        <button  className="btn-modal"onClick={toggleModal} >open</button>
        {modal &&(
             <div className="modal">
             <div className="overlay"></div>
                 <div className="modal-content">
                 <div className="weather-oneday">
                {data.map(dataa => 
                <div key={dataa.id}>
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
            </div>
                     <button className='close-modal'onClick={()=>{setmodal(!modal)}}>
                         X
                     </button>
                 </div>
         </div>
        )}
        
       
    </div>
)
}
