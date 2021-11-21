import React from "react";
// import { useNavigate } from "react-router";

import styled from "styled-components";

import { StyledImg } from "../../styles/Img.styled";
import { StyledButton } from "../../styles/Button.styled";

import useWindowSize from "../../../Hooks/useWindowSize";

const HomePage = () => {
  // let navigate = useNavigate();

  // const navigateToProductList = () => {
  //   navigate("/products");
  // };

  const { width: windowWidth } = useWindowSize();

  const StyledHomeContainer = styled.div`
    position: relative;
    top: 6.5vh;
    z-index: 1;
    height: 100%;
    padding: 3.25rem 3rem;
    min-width: 280px;
    p {
      font-size: 0.95rem;

      &:nth-of-type(2) {
        margin-top: 0.2rem;
        font-weight: 600;
      }
    }

    button {
      position: absolute;
      z-index: 7;
      top: 60.5vh;
      left: 50%;
      transform: translate(-50%, -50%);

      @media (max-width: 1000px) {
        // top: 68.5vh;
        left: 27.5%;
      }

      @media (max-width: 695px) {
        top: 67.5vh;
        left: 50%;
      }
    }

    @media (max-width: 851px) {
      padding: 3.25rem 0;
    }

    @media (max-width: 600px) {
      padding: 3.25rem 3rem;
    }
  `;

  const StyledImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
      justify-content: center;
    }

   h1 {
      position absolute;
      z-index: 2;
      font-size: clamp(10vmin, 11vmin, 50%);
      font-weight: 500;

      &:nth-of-type(1){
        top: 20%;

        @media (min-width: 601px) {
          left: 30%;

        }

        @media (max-width: 600px) {
          top: 10%;
          left: 13.5%;
        }

        @media (max-width: 300px) {
          left: 5%;
        }
      }

      &:nth-of-type(2){
        top: 40%;

        @media (min-width: 601px) {
          left: 34.5%;
        }

        @media (max-width: 600px) {
          top: 55.5%;
          right: 15%;
        }

        @media (max-width: 300px) {
          right: 25%;
        }
      }

      
    }

  `;

  return (
    <StyledHomeContainer>
      <StyledImageContainer>
        <h1>ELEGANT</h1>
        <StyledImg
          src="IMG_6812.jpeg"
          width="25%"
          height="70%"
          marginLeft="10%"
          marginBottom="2rem"
          mobWidth="100vw"
        >
          {" "}
        </StyledImg>

        <h1>COLLECTION.</h1>
        {windowWidth >= 600 && (
          <StyledImg
            src="IMG_6812.jpeg"
            width="25%"
            height="70%"
            marginTop="6rem"
            marginRight="10%"
            mobWidth="100vw"
          ></StyledImg>
        )}
      </StyledImageContainer>

      <StyledButton
        bg="#cc9d6a"
        // onClick={navigateToProductList}
        paddingTB="1rem"
        paddingLR="2.5rem"
        hoverBG="#fff"
        hoverColor="#cc9d6a"
      >
        Shop Now
      </StyledButton>
    </StyledHomeContainer>
  );
};

export default HomePage;
