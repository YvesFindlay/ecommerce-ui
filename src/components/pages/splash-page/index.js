import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router";

import styled from "styled-components";

const SplashPage = () => {
  // let navigate = useNavigate();

  // const navigateToHome = () => {
  //   navigate("/home");
  // };

  const splashContainerRef = useRef(null);

  const SplashContainer = styled.div`
    // header

    // intro

    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: #36454f;
    transition: 1s;

    // ,logo-header

    h1 {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
    }

    // .logo

    span {
      font-size: 10vmin;
      position: relative;
      display: inliine-block;
      bottom: -20px;
      opacity: 0;

      &.active {
        bottom: 0;
        opacity: 1;
        transition: ease-in-out 0.5s;
      }

      &.fade {
        bottom: 150px;
        opacity: 0;
        transition: ease-in-out 0.5s;
      }
    }
  `;

  useEffect(() => {
    const { current: splashContainerDOM } = splashContainerRef;
    const logoSpanDOM = document.querySelectorAll("h1 span");

    setTimeout(() => {
      logoSpanDOM.forEach((span, ind) => {
        setTimeout(() => {
          span.classList.add("active");
        }, (ind + 1) * 400);
      });
    });

    setTimeout(() => {
      logoSpanDOM.forEach((span, ind) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (ind + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      splashContainerDOM.style.top = "-100vh";
    }, 2300);
  }, []);

  return (
    <SplashContainer ref={splashContainerRef}>
      <h1>
        <span>Clothes</span>
        <span>Co</span>
      </h1>
    </SplashContainer>
  );
};

export default SplashPage;
