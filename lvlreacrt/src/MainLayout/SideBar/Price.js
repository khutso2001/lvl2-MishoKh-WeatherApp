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
import { Box } from '@material-ui/core';
import "./Price.css";
const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    display: 'flex'

  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
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
    <Container>
      <Box mb={3}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Price</FormLabel>
          <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
            <FormControlLabel value="UNDER $25" control={<StyledRadio />} label="UNDER $25" />
            <FormControlLabel value="$25 TO $50" control={<StyledRadio />} label="$25 TO $50" />
            <FormControlLabel value="$50 TO $100" control={<StyledRadio />} label="$50 TO $100" />
            <FormControlLabel value="$100 TO $200" control={<StyledRadio />} label="$100 TO $200" />
            <FormControlLabel value="$200 TO $ABOVE" control={<StyledRadio />} label="$200 TO $ABOVE" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <form classes={classes.root} noValidate autoComplete="off">
          <TextField className="inputt"
            id="outlined-search-input"
            label="search..."
            type="search"
            autoComplete="current-search"
            variant="outlined"
          />


          <TextField className="inputt"
            id="outlined-search-input"
            label="search..."
            type="search"
            autoComplete="current-search"
            variant="outlined"
          />
        </form>
      </Box>
    </Container>

  );
}
export default Price;