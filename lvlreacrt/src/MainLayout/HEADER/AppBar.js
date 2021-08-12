import React, { useEffect, useContext  } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import "./AppBar.css";
import SignUnButton from "../component/SignUpButtonHeader";
import Grid from '@material-ui/core/Grid';
import { Menu } from '@material-ui/icons';
import { Box } from '@material-ui/core';
import {Link as MLink} from "@material-ui/core";
import {Link} from "react-router-dom";
import {ALLLCONTENT,ADMIN,SIGN_IN,SIGN_UP} from "../Routes";
import {UserContext} from "../store/UserContext";
import { useSelector } from 'react-redux';
import { selectUser } from './../store/user/userSelector';
import { Button } from 'bootstrap';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/user/userActionCreator';
import { setLogin } from './../store/user/userActionCreator';
const useStyles = makeStyles({
  root: {
   alignItems:'center',
   
  },
  mrgin:{
    marginLeft: '250px',
  },
  mdb:{
    fontWeight:'bold',
  },
inline:{
  width:'60px',
  display:'inline-block',
},
logOutBtn:{
  borderRadius:'30px',
  backgroundColor:'white',
  border:'none',
  color: 'red',
  padding: '8px 32px',
  textAlign:'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
  heightL:'20px',
}
  

});

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};


export default function ElevateAppBar(props) {
  const classes = useStyles();
  let userData = useSelector(selectUser);
  let dispatch = useDispatch();
  const Logout = () => {
    dispatch(setLogin(false));
    localStorage.removeItem('token');
  }
  console.log(userData);
  return (
    
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll  {...props}>
        <AppBar color='inherit'>
          <Toolbar>
            <Grid Container item xs={12} >

              <Grid item justify='space-between' alignItems='center' xs={7} >
                <Typography variant="h6" ><p className={classes.mdb}>MDB</p></Typography>
                
                
                </Grid>
              <Grid item alignItems='center' className="menuMargin" xs={6} className={classes.mrgin} >
              
                <Grid item className='toHide' classes={{ root: classes.root }} >
                  
                  <ShoppingCartIcon classes={{ root: classes.root }} />
                  <FlagIcon />
                  <Grid item classes={{ root: classes.root }}>
                    {
                      userData.isLogedIn ? (
                        <>
                        <ul style={{alignItems:'center'}} >
                    <MLink style={{textDecoration:'none'}} component ={Link} to={ALLLCONTENT}><li><a href="#">HOME</a></li> </MLink>                
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <MLink style={{textDecoration:'none'}} component ={Link} to={ADMIN}> <li><a href="#" >ADMIN</a></li></MLink>
                    <li><button className={classes.logOutBtn} onClick={Logout}>Logout</button></li>
                    </ul>
                        </>

                      ) : (
                        <>
                        <ul style={{alignItems:'center'}} >
                    <MLink style={{textDecoration:'none'}} component ={Link} to={ALLLCONTENT}><li><a href="#">HOME</a></li> </MLink>                
                    <li><a href="#">SHOP</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <MLink style={{textDecoration:'none'}} component ={Link} to={ADMIN}> <li><a href="#" >ADMIN</a></li></MLink>
                    <MLink style={{textDecoration:'none'}} component={Link} to={SIGN_IN}><li><a href="#" className={classes.inline}>SIGN IN</a></li></MLink>
                  </ul>
                  <MLink  style={{textDecoration:'none'}}component={Link} to={SIGN_UP}><SignUnButton >sign up</SignUnButton>  </MLink>
                  </>
                      )
                    }
              
                  </Grid>
                 </Grid>
            </Grid>
              </Grid>
              <Menu className='brg' />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
        <Toolbar />
    </React.Fragment>
  
      );
}