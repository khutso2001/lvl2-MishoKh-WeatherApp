import React,{useState} from 'react';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import './Content.css';
import Card from "./Cards"
import Sidebar from "./SideBar/Sidebar"
function Content() {
 const [data,setData]=useState([
   {
     title:'dress',
     img:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
     price:'99,9'
   },
   {
    title:'dress',
    img:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
    price:'99,9'
  },
  {
    title:'dress',
    img:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
    price:'99,9'
  },
   {
     title:'dress',
     img:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg',
     price:'99,9'
   },
  
 ]);
  return (

    <Container maxWidth="xl">
      <Grid Container>
          <Grid item ={3} >
            <Sidebar/>
          </Grid>
          <Grid item xl={9} >
            <Grid Container>
              {data.map(el=>(
                <Grid item xl={4} >
                    <Card data={el}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
      </Grid>
    </Container>
      
  )

};

export default Content;
