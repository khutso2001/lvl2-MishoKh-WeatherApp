import React from 'react';
import { Box } from "@material-ui/core"
import { Icon } from "@material-ui/core"
import { useState } from "react"
import { makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles((theme) => ({
    root: {
     padding: '8px 20px',
     border :'1px solid black',
     justifyContent:'center',
    },
    border:{
        border:'1px solid black',
    }

    
   
  }));

const Quantity = () => {
    let [data, setData] = useState(0);
    const minusCounter = () => {
        let smth = data;
        setData(--smth);
        if (data < 0) {
            return 0;
        }
    }
    const plusCounter = () => {
        let smth = data;
        setData(++smth);
    }
    const classes = useStyles();

    return (

        <div>
            <p>Quantity</p>
            <Box  component='div' className='quantity' display='flex'>
               <RemoveIcon  style={{ fontSize: 40 }} className={classes.border} onClick={minusCounter}/>
                <Box   className={classes.root} component='div'>{data}</Box>
                <AddIcon   style={{ fontSize: 40 }} className={classes.border} onClick={plusCounter}/>
            </Box>
        </div>
    )
}

export default Quantity;