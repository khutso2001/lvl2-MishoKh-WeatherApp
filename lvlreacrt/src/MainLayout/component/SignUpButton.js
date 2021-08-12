import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        borderRadius:'5px',
        backgroundColor:'blue',
        border:'none',
        color: 'white',
        padding: '15px 32px',
        textAlign:'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
    },
    signInButtonCenter:{
        justifyContent:'center',
    }
});
function SignUnButton() {
    const classes = useStyles();

  return (
    <Container>
        <Grid Container className={classes.signInButtonCenter}>
            <Grid item >
            <button className={classes.root}>
            Sign Up
        </button>
            </Grid>
        </Grid>
        

    </Container>
  )
};
export default SignUnButton;