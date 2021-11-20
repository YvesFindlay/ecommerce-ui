import React from "react";

import Nav from "../../Nav/Nav";
import Search from "../../Search/Search";
import Product from "../../Product/Product";

import { Container } from "../../styles/Container";

const ProductPage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Container paddingT="4rem" paddingLR="3rem" paddingB="4rem">
        <Search />
        <Product />
      </Container>
    </React.Fragment>
  );
};

export default ProductPage;
