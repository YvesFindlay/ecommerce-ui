import React from "react";

import Nav from "./components/Nav/Nav";
// import Search from "./components/Search/Search";
// import Product from "./components/Product/Product";

// import ProductView from "./components/Product/ProductView";
import Footer from "./components/Footer/Footer";

import { Container } from "./components/styles/Container";

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Container paddingT="2rem" paddingLR="1rem" paddingB="4rem">
        {/* <Search />
        <Product /> */}
        {/* <ProductView /> */}
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
