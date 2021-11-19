import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/pages/product-page'
const SplashPage = <div>hello world</div>;
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SplashPage/>}/>
          <Route exact path="/product" element={<ProductList/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
