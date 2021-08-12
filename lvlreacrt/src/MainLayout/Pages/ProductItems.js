import React, { useState, useEffect } from 'react';
import Footer from '../layouts/footer/Footer';
import ElevateAppBar from '../header/AppBar';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import "./product-item.css";
import Quantity from "../component/Quantity";
import SelectedSize from "../component/SelectedSize";
import Button from '@material-ui/core/Button';
import FullWidthTabs from "../component/Tabs";
import { useParams } from 'react-router-dom';
import { CardMedia } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { CardActionArea } from '@material-ui/core';
import Loader from '../Loader';
import Api from "../api.js/api";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    margin: '0px',
    padding:'0',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  borderBottom: {
    borderBottom: '1px solid black'
  },
  size:{
    width:'98%',
    height:'400px',
  },
  sizeSelect:{
    width:'98%',
    height:'200px',
  },
  spaceBetween:{
    justifyContent:'space-between',
    width:'98%',
    height:'200px',
  },
  productPage:{
    margin:'25px 0 25px 0',
  }

}));

function ProductItem() {

  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});


  const { id } = useParams();
  useEffect(() => {
      setLoading(true);
      Api.getSingleItem(id)
      .then(resp => setData(resp))
          .catch(err => console.log(err))
          .finally(() => {
              setLoading(false);
          })
  }, [])

  
  return (
    <Container className={classes.root}>
      < Container  >
        <ElevateAppBar />

        <Grid Container className="ProductPage">
          <Grid item className={classes.productPage}>
            <h2 >Product page</h2>
          </Grid>
        </Grid>

        <Loader isLoading={loading}>
          {!!data.hasOwnProperty('title') && <Grid Container xs={12}>

              <Grid container xs={6} justify='space-between' >
                <Grid item xs={12}  >
                  
                  <Card  className={classes.size}>
                    <CardActionArea  className={classes.size}>
                      <CardMedia    
                        style={{width:'100%',height:'300px'}}
                        className={classes.media}
                        image={data.img}
                        title={data.title}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item className={classes.spaceBetween}>
                <Grid item xs={3} className={classes.sizeSelect}>
                  <Card className={classes.sizeSelect}>
                    <CardActionArea className={classes.sizeSelect}>
                      <CardMedia 
                      style={{width:'100%',height:'200px'}}
                        className={classes.media}
                        image={data.img}
                        title={data.title}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className={classes.sizeSelect}>
                    <CardActionArea className={classes.sizeSelect}>
                      <CardMedia
                       style={{width:'100%',height:'200px'}}
                        className={classes.media}
                        image={data.img}
                        title={data.title}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                <Grid item xs={3} >
                  <Card className={classes.sizeSelect}>
                    <CardActionArea className={classes.sizeSelect}>
                      <CardMedia
                       style={{width:'100%',height:'200px'}}
                        className={classes.media}
                        image={data.img}
                        title={data.title}
                      />
                    </CardActionArea>
                  </Card>
                </Grid>
                </Grid>
                
            </Grid>

            <Grid item direction='column' xs={6}>
              <h4>Blue denim shirt</h4>
              <p>SHIRTS</p>
              <ul class="rating">
                <li>
                  <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                  <i class="fas fa-star fa-sm text-primary"></i>
                </li>
                <li>
                  <i class="far fa-star fa-sm text-primary"></i>
                </li>
              </ul>
              <h3>$17.99</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.</p>
              <Grid item className={classes.borderBottom} >
                <Grid item direction='column' xs={3}>
                  <h4>Model</h4>
                  <h4>Color</h4>
                  <h4>Delivery</h4>
                </Grid>
                <Grid item direction='column' xs={3}>
                  <h4>Shirt 5407X</h4>
                  <h4>Blue</h4>
                  <h4>USA Europe</h4>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item>
                  <Quantity />
                </Grid>
                <Grid item>
                  <SelectedSize />
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="contained" size="medium" color="primary" className={classes.margin}> Buy Now</Button>
                <Button variant="contained" size="medium" color="inherit" className={classes.margin}> ADD TO CARD</Button>
              </Grid>
            </Grid>
          </Grid>}
        </Loader>



        <Grid Container>
          <FullWidthTabs />
        </Grid>
      </Container>

      <Container className={classes.root}>
        <Footer className={classes.root} />
      </Container>
    </Container>


  )

};

export default ProductItem;