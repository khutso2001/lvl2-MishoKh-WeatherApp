import React from 'react';
import './ContentHEader.css';  
const ContentHeader=({data,setData,setTitle,title})=>{
    

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
    return(
        <div className="Todoscenter">
            <h1>Todos</h1>
            <form  onSubmit={addData}>
                <input className="main_input"value={title} onChange={hndleChange} placeholder="enter tode here" />
                <button type='submit' className="button">submit</button>
            </form>
        </div>
    );
};
export default ContentHeader;