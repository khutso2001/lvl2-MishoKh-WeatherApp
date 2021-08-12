import React from 'react';
import InsetList from "../component/Subcategories";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Input from "../component/Input";
import CheckBox from "../component/CheckBox";
import Star from "../component/AvgStars";
import Price from "../component/Price";
import Sliders from "../component/Slider";
import Size from "../component/Size";
import Color from "../component/Color";
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
            <Color/>
            </Grid>
        </Grid>
        
    </Container>
   
  )

};

export default Sidebar;