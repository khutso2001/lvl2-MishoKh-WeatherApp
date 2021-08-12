import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'
import SearchIcon from '@material-ui/icons/Search';
import "./input.css";
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
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
        <SearchIcon  className="searchiconmargin"style={{ fontSize: 45}}/>
        </form>
       
    </Box>
    
  );
}
export default Input;