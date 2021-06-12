import React from 'react';
import './Todos.css';  
import {useState} from 'react';
import ContentHeader from './ContentHeader';
const Todos=()=>{
    const [data,setData]=useState([]);
    const [title,setTitle] = useState('');
 
    let addData = (e) =>{
        e.preventDefault();
       setData(
           [
               {
                id:Math.random()*100,
                title:title,
                checked:false,
                cvld:false
               },
               ...data
           ]
       )
       setTitle('');
    }
 
    let hndleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
       
    }
    
    let deleteData = (index) => {
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
 
    let editTitle = (index) =>  {
        setData(
           
            data.map(el => {
                
                if(el.id===data[index].id){
                    el.cvld=true;
                }
                return el;
                
            })
            
        )
    }
 
 
    let saveTitle = (index) => {
        setData(
            data.map(el => {
                if(el.id===data[index].id){
                    
 
                    el.cvld=false;
                    el.title=title;
                }
                return el;
            })
        )
    }
 
    return(
        <div className="Todoscenter">
         <ContentHeader data={data} setData={setData} setTitle={setTitle} title={title}/>
            <ul className="ulName">
                {
                    data.map((el,index)=>  {
                        return(
                           <div className="contentbox">
                            <li key={index} className="liName">
                            <input className="liName"type="checkbox" checked={el.checked} onChange=
                            {() => 
                            toggleStatus(index)
                            }></input>
 
                                {el.cvld ?
                                    <div>
                                    <input type="text" value={title} onChange={hndleChange}placeholder="enter a name"></input>
                                    <button className="buttonn save"onClick={()=> {
                                        saveTitle(index)
                                    }}>Save</button>
                                </div>
 
                                : el.title
                                }
                                <img src="logo192.png" alt ="img" className="editicon"onClick =
                                {
                                    () => editTitle(index)
                                }></img>
                            <button className="button_box" onClick={() => deleteData(index)}>
                                <div className="icon-box">
                                <img  className="deleteimg" alt ="img"src="data:image/png;base64,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"></img>
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

