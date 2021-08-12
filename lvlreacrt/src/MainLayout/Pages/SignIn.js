import React, {useContext} from "react";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from '@material-ui/core/Grid';
import ElevateAppBar from "../header/AppBar";
import Footer from "../layouts/footer/Footer";
import { makeStyles } from '@material-ui/core';
import SignInButton from "./SignInButton";
import "./SignIn.css";
import * as Yup from 'yup';
import {UserContext} from "../store/UserContext";
import Api from "../api.js/api";
import { useDispatch } from 'react-redux';
import { setLoginIn, setToken, setUser } from "../store/user/userActionCreator";
import { setLogin } from './../store/user/userActionCreator';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const useStyles = makeStyles({
    contentCenter: {
        justifyContent: 'center',
    },
    fieldWidth: {
        width: '630px',
    },
    remember: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    SigninContent:{
        justifyContent: 'center',
        padding:'20px',
    },
    footer:{
        maxWidth:'100%',
        padding:'0',
        margin:'0',
    }
});
const SignIn = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    let dispatch = useDispatch();
    let history = useHistory();
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
           
        },
        validationSchema: Yup.object({
            email: Yup.string().email(<p className="required">Invalid email address</p>)
            .required(<p className="required">please enter your email</p>),
            password: Yup.string()
            .min(8, <p className="required">Must be 8 characters or more</p>)
            .required(<p className="required">please enter your password</p>),
      
      
          }),
          onSubmit: (values, { setStatus, resetForm, setErrors, setSubmitting }) => {
            Api.signIn(values.email, values.password)
                .then((json) => {
                    console.log( json);
                    setStatus(true);
                    resetForm();
                    dispatch(setUser(json.user))
                    dispatch(setToken(json.token.access_token))
                    dispatch(setLogin(true))
                    history.push('/');
                    localStorage.setItem("token",json.token.access_token)
                })
                
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log("sent");
                });
        },
    });
    return (
        <form className="styling" onSubmit={formik.handleSubmit}>
                <Grid Container direction='column'>
                    <Grid item>
                        <ElevateAppBar />
                    </Grid>
                    <Grid item  className={classes.SigninContent}>
                        <h1>Sign In</h1>
                    </Grid>
                    <Grid item direction='column'>
                        <Grid item className={classes.contentCenter}>
                            <TextField className={classes.fieldWidth}
                                id="email"
                                value={formik.values.email}
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                label="Your email"
                                variant="outlined"
                                style={{ marginBottom: "20px" }}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        </Grid>
                        <Grid item className={classes.contentCenter}>
                            <TextField className={classes.fieldWidth}
                                id="password"
                                value={formik.values.password}
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                label="Your password"
                                variant="outlined"
                            />
                            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        </Grid>
                        <Grid item className={classes.remember}>
                            <FormControlLabel
                                style={{ color: "#6c757d" }}
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />

                            <p>
                                <a className="forgetPass" href="">
                                    Forgot password?
                                </a>
                            </p>
                        </Grid>
                        <SignInButton />

                    </Grid>
                    <Grid item direction='column' >
                        <Grid item className={classes.contentCenter}>
                            <p c>
                                Not a member?{" "}
                                <a href="" >
                                    Register
                                </a>
                            </p>
                        </Grid>
                        <Grid item className={classes.contentCenter}>
                            <p className="fixed">or sign in with:</p>

                        </Grid>
                    </Grid>
                    <Grid item className={classes.contentCenter}>
                       
                            <Button>
                                <i className="fab fa-facebook-f second"></i>
                            </Button>
                            <Button>
                                <i className="fab fa-twitter second"></i>
                            </Button>
                            <Button>
                                <i className="fab fa-linkedin-in second"></i>
                            </Button>
                            <Button>
                                <i className="fab fa-github"></i>
                            </Button>
                    </Grid>
                    <Grid item>
                        <Footer className={classes.footer} />
                    </Grid>
                </Grid>
        </form>

    )
};
export default SignIn;

