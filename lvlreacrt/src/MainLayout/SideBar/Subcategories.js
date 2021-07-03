import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

 function InsetList() {
  const classes = useStyles();

  return (
    <Container>
      <ul>
    <h3>Subcategories</h3>
    <li><a href="#">RETURN TO CLOTHING, SHOES, ACCESSORIES</a></li>
    <li><a href="#">DRESSES</a></li>
    <li><a href="#">TOPS, TEES BLOUSES</a></li>
    <li><a href="#">SWEATERS</a></li>
    <li><a href="#">FASHION HOODIES  SWEATSHIRTS</a></li>
    <li><a href="#">JEANS</a></li>
      </ul>
    </Container>
  );
}
export default InsetList;