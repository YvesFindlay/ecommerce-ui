import React from "react";

import styled from "styled-components";
import { Container } from "../styles/Container";
import { StyledButton } from "../styles/Button.styled";

import Carousel from "../Carousel/Carousel";
import { CarouselData } from "../Carousel/CarouselData";

export const ProductViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 6.5rem 8rem;
  min-width: 280px;
  @media (max-width: 1360px) {
    padding: 0 0.5rem 5rem;
  }
`;

export const ProductTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.35rem;
    font-weight: 300;
  }

  span {
    display: inline-block;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 1rem;
  }

  @media (min-width: 650px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;

export const ProductViewWrap = styled.div`
  display: grid;
  grid-template-columns: 55% 1fr;
  grid-auto-flow: column;
  overflow-x: hidden;
  height: 90vmin;

  @media (max-width: 650px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: auto;
  }
`;

export const ProductDescriptionContainer = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    padding: 3rem 0.5rem 0 2rem;
  }
`;

const ProductView = () => {
  return (
    <ProductViewContainer>
      <Container paddingT="0" paddingLR="1rem" paddingB="0">
        <ProductViewWrap>
          <Carousel slides={CarouselData} />
          <ProductDescriptionContainer>
            <ProductTextContainer>
              <h3>GREY TWILL BUTTON DOWN WOOL COAT</h3>
              <span>16.99 GBP</span>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                possimus dicta aperiam quos cupiditate cum? Cum pariatur.
              </p>
              <StyledButton>Add to cart</StyledButton>
            </ProductTextContainer>
          </ProductDescriptionContainer>
        </ProductViewWrap>
      </Container>
    </ProductViewContainer>
  );
};

export default ProductView;
