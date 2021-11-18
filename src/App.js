import React from "react";

import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import Product from "./components/Product/Product";

import { Container } from "./components/styles/Container";

const App = () => {
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

export default App;
