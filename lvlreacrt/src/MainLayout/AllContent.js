import React from 'react';
import Header from "./HEADER/Header"
import Footer from './FOOTER/Footer';
import Content from './Content';
import ElevateAppBar from './HEADER/AppBar';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth:'1400px',
    margin:'0px'
  }
}); 

function AllContent() {
  const classes=useStyles();
  return (
    <Container classes={{root:classes.root}}>
      <ElevateAppBar/>
        <Header/>
        <Content/>
        <Footer>
          
        </Footer>
    </Container>
  
  )

};

export default AllContent;
