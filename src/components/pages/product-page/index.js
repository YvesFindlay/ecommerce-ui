import React from "react";

import Search from "../../Search/Search";

import { StyledProduct } from "../../styles/Product.styled";
import { Container } from "../../styles/Container";
import { StyledImg } from "../../styles/Img.styled";
import { StyledButton } from "../../styles/Button.styled";

import styled from "styled-components";

const StyledProductContainer = styled.div`
  width: 80vmin;
  max-width: 600px;
  min-width: 300px;
  margin: 0 auto;
  padding: 1rem;

  p {
    font-size: 0.95rem;
    margin-top: 1rem;

    &:nth-of-type(2) {
      margin-top: 0.2rem;
      font-weight: 600;
    }
  }

  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
  }
`;

const StyledProductWrap = styled.div`
  display: flex;
  column-gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const StyledBuyNowContainer = styled.div`
  margin-top: auto;

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`;

const StyledProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  flex: 1;

  @media (max-width: 580px) {
    margin-top: 1.5rem;
  }
`;

const Product = ({ productData }) => {
  return (
    <React.Fragment>
      <Container
        top="8rem"
        marginB="5.5rem"
        paddingT="3rem"
        paddingLR="0"
        paddingB="0"
      >
        <Search />
      </Container>
      <StyledProduct>
        <Container top="0" paddingT="0" paddingLR="0" paddingB="1rem">
          <StyledProductContainer>
            <StyledProductWrap>
              <StyledImg
                src="IMG_6812.jpeg"
                marginT="0"
                height="200px"
                width="180px"
              />
              <StyledProductInfoContainer>
                <p>Golden Ribbed Jumper</p>
                <p>16.99 GBP</p>
                <StyledBuyNowContainer>
                  <StyledButton bg="#cc9d6a" color="#fff">
                    View Now
                  </StyledButton>
                </StyledBuyNowContainer>
              </StyledProductInfoContainer>
            </StyledProductWrap>
          </StyledProductContainer>
        </Container>
        <Container paddingT="1rem" paddingLR="0" paddingB="1rem">
          <StyledProductContainer>
            <StyledProductWrap>
              <StyledImg
                src="IMG_6812.jpeg"
                marginT="0"
                height="200px"
                width="180px"
              />
              <StyledProductInfoContainer>
                <p>Sweater</p>
                <p>29.99 GBP</p>
                <StyledBuyNowContainer>
                  <StyledButton bg="#cc9d6a" color="#fff">
                    View Now
                  </StyledButton>
                </StyledBuyNowContainer>
              </StyledProductInfoContainer>
            </StyledProductWrap>
          </StyledProductContainer>
        </Container>
        <Container paddingT="1rem" paddingLR="0" paddingB="1rem">
          <StyledProductContainer>
            <StyledProductWrap>
              <StyledImg
                src="IMG_6812.jpeg"
                marginT="0"
                height="200px"
                width="180px"
              />
              <StyledProductInfoContainer>
                <p>Sweater</p>
                <p>29.99 GBP</p>
                <StyledBuyNowContainer>
                  <StyledButton bg="#cc9d6a" color="#fff">
                    View Now
                  </StyledButton>
                </StyledBuyNowContainer>
              </StyledProductInfoContainer>
            </StyledProductWrap>
          </StyledProductContainer>
        </Container>
      </StyledProduct>
    </React.Fragment>
  );
};

export default Product;
