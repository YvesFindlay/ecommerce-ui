import React from "react";
import { useNavigate } from 'react-router';

const HomePage = () => {
  let navigate = useNavigate();

  function navigateToProductList() {
    navigate('/apilist')
  }
  
  return (
    <div>
        <h1>Home Page</h1>
        <button
            onClick={navigateToProductList}
          >
            Women
        </button>
    </div>
  );
};

export default HomePage;
