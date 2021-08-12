import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import "./Price.css";
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    display: 'flex'

  },
  
 
});
const useStyless = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '15ch',
    },
  },
}));


function StyledRadio(props) {
  const classess = useStyless();

  return (
    <Radio
      className={classess.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classess.icon, classess.checkedIcon)} />}
      icon={<span className={classess.icon} />}
      {...props}
    />
  );
}

function Price() {
  const classes = useStyles();

  return (
    <Grid Container direction='column'>
      <Grid item >
        <FormControl component="fieldset">
          <FormLabel component="legend"><h3>Price</h3></FormLabel>
          <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
            <FormControlLabel value="UNDER $25" control={<StyledRadio />} label="UNDER $25" />
            <FormControlLabel value="$25 TO $50" control={<StyledRadio />} label="$25 TO $50" />
            <FormControlLabel value="$50 TO $100" control={<StyledRadio />} label="$50 TO $100" />
            <FormControlLabel value="$100 TO $200" control={<StyledRadio />} label="$100 TO $200" />
            <FormControlLabel value="$200 TO $ABOVE" control={<StyledRadio />} label="$200 TO $ABOVE" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <form classes={classes.root} noValidate autoComplete="off">

      <Grid item direction='row'>
        <Grid item>
        <TextField className="inputt"
            id="outlined-search-input"
            label="$ Min"
            type="search"
            autoComplete="current-search"
            variant="outlined"
            
          />
        </Grid>
        <Grid item style={{marginTop:'15px'}}>
       < RemoveIcon />

        </Grid>
        <Grid item>
        <TextField className="inputt"
            id="outlined-search-input"
            label="$ Max"
            type="search"
            autoComplete="current-search"
            variant="outlined"
          />
        </Grid>
      
    
      </Grid>
      </form>

    </Grid>

  );
}
export default Price;