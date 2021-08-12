import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '139ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
        
      },
   
   
}));

export default function Fields() {
    const classes = useStyles();

    return (
        <Container>
            <Grid Container>
                <Grid item direction ='column'>
                    <form className={classes.root}  noValidate autoComplete="off">
                        <TextField    id="outlined-basic"  label="Your review" variant="outlined" />
                    </form>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                    </form>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField   id="outlined-basic" label="Email" variant="outlined" />
                    </form>
                </Grid>
            </Grid>
            <Grid item>
            <Grid item xs={10}></Grid>
                <Grid item xs={2}>
                <Button variant="contained" size="medium" color="primary" className={classes.margin}>ADD A REVIEWS</Button>

                </Grid>
            </Grid>

        </Container>

    );
}
