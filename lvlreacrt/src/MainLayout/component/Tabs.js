import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Fields from "./Fields";
import { Container } from '@material-ui/core';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  maxWidth :{
    width:'100%',
  },
  border :{
    border: '1px solid black',
  },
 
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container className={classes.root} className={classes.maxWidth}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="DESCRIPTION" {...a11yProps(0)} />
          <Tab label="INFORMATION" {...a11yProps(1)} />
          <Tab label="REVIEWS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <p>Product Description</p>
        <p>SHIRTS</p>
        <p>12.99 $</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.</p>
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
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <h3>Additional Information</h3>
          <Grid item >
          <Grid item direction='column' xs={2}>
            <Grid item className={classes.border}>
            <p>Weight</p>
            </Grid>
            <Grid item className={classes.border}>
              <p>Dimensions</p>
            </Grid>
          </Grid>
          <Grid item xs={10} direction ='column'> 
          <Grid item className={classes.border}>
            <p>0.3 kg</p>
            </Grid>
            <Grid item className={classes.border}>
              <p>	50 × 60 cm</p>
            </Grid>
          </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid item direction ='column'>
          <h3>1 review for Fantasy T-shirt</h3>
          <Grid item>
          <Grid item xs={1}>
          <img  className="minWidth"src ="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"></img>
          </Grid>
          <Grid item direction ='column' xs={10}>
            <p>Marthasteward – January 28, 2020</p>
            <p>Nice one, love it!</p>
          </Grid>
          <Grid item xs={1}>
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
          </Grid>
          </Grid>
          </Grid>
          <Fields/>
         
        </TabPanel>
      </SwipeableViews>
    </Container>
  );
}