import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import './Input.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

 function Input() {
  const classes = useStyles();

  return (
     
      
      <Box component="div" m={1}>
        <h2>Filter</h2>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField className="input"
          id="outlined-search-input"
          label="search..."
          type="search"
          autoComplete="current-search"
          variant="outlined"
        />
        </form>
    </Box>
    
  );
}
export default Input;