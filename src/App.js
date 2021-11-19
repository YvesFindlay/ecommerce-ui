import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/pages/product-page';
import SplashPage from './components/pages/splash-page';
import HomePage from './components/pages/home-page'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SplashPage/>}/>
          <Route  path="/home" element={<HomePage/>}/>
          <Route  path="/product" element={<ProductList/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
