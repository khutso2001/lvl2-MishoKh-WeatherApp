import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CategoryIcon from '@material-ui/icons/Category';
import Modal from "../../Modal";
import Signup from "../../component/SignUpformik";
import AdminTable from "../../component/AdminPanelTable";
import ElevateAppBar from "../../header/AppBar";
const useStyles = makeStyles({
    root: {
     flexDirection:'column',
    },
    linkLayout:{
        display: 'flex',
        justifyContent: 'space-normal',
    },
    maxWidth: {
        maxWidth:'1400px',
      },
      margin:{
          marginTop:'30px',
      }
  });
  
function Admin() {
    const classes = useStyles();

  return (
    <Container>
            <Grid Container direction='column' className={classes.maxWidth}>
                <Grid item>
                    <ElevateAppBar/>
                </Grid>
                <Grid Container sx={12} className={classes.margin}>
                    <Grid item sx={4} direction='column'>
                        <Grid item>
                        <ul className={classes.root}>
                            <li className={classes.linkLayout}><LocalMallIcon/><a href="#"style={{fontSize:'18px',marginLeft:'10px'}}>PRODUCT</a></li>
                            <li className={classes.linkLayout}> <PersonIcon/><a href="#"style={{fontSize:'18px',marginLeft:'10px'}}>USERS</a></li>
                            <li className={classes.linkLayout}><CategoryIcon/><a href="#"style={{fontSize:'18px',marginLeft:'10px'}}>CATEGORIES</a></li>
                        </ul>
                        </Grid>
                        <Grid item>
                        <Modal>
                            <Signup/>
                        </Modal>
                        </Grid>
                        
                    </Grid>
                    <Grid item sx={8}>
                        <Grid item>
                        <AdminTable/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </Container>
  )
};

export default Admin;