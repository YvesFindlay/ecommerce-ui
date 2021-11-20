import React from "react";
import { useNavigate } from 'react-router';

const SplashPage = () => {
  let navigate = useNavigate();

  function navigateToHome() {
    navigate('/home')
  }

  return (
    <div>
        <h1>Splash Page</h1>
        <button
            onClick={navigateToHome}
          >
            Home
          </button>
    </div>
  );
};

export default (SplashPage);
