import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductViewPage from "./components/pages/productview-page";
import ProductPage from "./components/pages/product-page";
import SplashPage from "./components/pages/splash-page";
import HomePage from "./components/pages/home-page";

import Nav from "./components/Nav/Nav";

import styled from "styled-components";

import ProductView from "./components/Product/ProductView";
import Footer from "./components/Footer/Footer";

import { Container } from "./components/styles/Container";

const App = () => {
  const AppContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 90px);
    min-width: 285px;
  `;

  return (
    <AppContainer>
      <Nav />
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<SplashPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router> */}
      {/* <Container paddingT="2rem" paddingLR="1rem" paddingB="4rem"> */}
      {/* </Container> */}

      {/* <SplashPage /> */}
      {/* <HomePage /> */}
      {/* <ProductPage /> */}

      <ProductViewPage />

      <Footer />
    </AppContainer>
  );
};
export default App;
