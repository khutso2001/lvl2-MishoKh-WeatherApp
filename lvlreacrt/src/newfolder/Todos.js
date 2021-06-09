import React from 'react';
import './Todos.css';  
import {useState} from 'react'
const Todos=()=>{
    const [data,setData]=useState([

    ]);
    const [title,setTitle] = useState('');

    let addToData = (e) =>{
        e.preventDefault();
       setData(
           [
               {
                title:title,
                checked:false
               },
               ...data
           ]
       )
       setTitle('');
    }

    let handleChange = (e) => {
        setTitle(e.target.value);
    }

    let deleteData = (e,index) => {
        let tmp = [...data];
        tmp.splice(index,1);
        setData(
            [
                ...tmp
            ]
        )
    }

    let toggleStatus = (index) => {
        let tmp=[...data];
        tmp[index].checked=!tmp[index].checked;
        setData(
            [
                ...tmp
            ]
            
        )

    }
    return(
        <div className="Todoscenter">
            <h1>Todos</h1>
            
            
            <form  onSubmit={addToData}>
                <input value={title} onChange={handleChange} placeholder="enter tode here" />
                <button type='submit' className="button">submit</button>
            </form>
           
            <ul className="ulName">
                {
                    data.map((el,index)=>  {
                        return(
                           <div className="contentbox">
                            <li className="liName"key={index}>
                            <input className="liName"type="checkbox" checked={el.checked} onChange={() => toggleStatus(index)}></input>
                                {el.title}
                                <img src="logo192.png" className="editicon"></img>
                            <button className="button_box" onClick={() => deleteData(index)}>
                                <div className="icon-box">
                            <i className="fa fa-trash"></i>

                            </div></button>
                            </li>
                            </div>
                        )
            }
                    )
                }
            </ul>
            
        </div>
    );
};
export default Todos;