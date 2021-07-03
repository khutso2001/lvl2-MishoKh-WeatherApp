import React from 'react';
import InsetList from "./Subcategories";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Input from "./Input";
import CheckBox from "./CheckBox";
import Star from "./AvgStars";
import Price from "./Price";
import Sliders from "./Slider";
import Size from "./Size";
function Sidebar() {

  return (
    <Container>
        <Grid Container>
            <Grid item>
            <InsetList/>
            
            </Grid>
            
        </Grid>
        <Grid Container>
            <Grid item direction="column">
            <Input/>
            <CheckBox/>
            <Star/>
            <Price/>
            <Sliders/>
            <Size/>
            </Grid>
        </Grid>
        
    </Container>
   
  )

};

export default Sidebar;
