import React from 'react';
import Container from '@material-ui/core/Container'
import "./Subcategories.css";

 function InsetList() {

  return (
    <Container>
      <h3>Subcategories</h3>
      <ul className="Subcategories-list">
        <li><a href="#">RETURN TO CLOTHING, SHOES, ACCESSORIES</a></li>
        <li><a href="#">DRESSES</a></li>
        <li><a href="#">TOPS, TEES & BLOUSES</a></li>
        <li><a href="#">SWEATERS</a></li>
        <li><a href="#">FASHION HOODIES & SWEATSHIRTS</a></li>
        <li><a href="#">JEANS</a></li>
      </ul>
    </Container>
  );
}
export default InsetList;