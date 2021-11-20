import React, { useState } from "react";

import { CarouselData } from "./CarouselData";
import { StyledImg } from "../styles/Img.styled";
import { StyledButton } from "../styles/Button.styled";

import ArrowRightSVG from "../../svg/ArrowRight";
import ArrowLeftSVG from "../../svg/ArrowLeft";

import styled from "styled-components";

export const StyledCarousel = styled.div`
  position: relative;
  z-index: 1;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-position: center center;
  background-size: cover;
`;

// const StyledCarouselImage = styled.div``;

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlideHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlideHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <StyledCarousel>
      <StyledButton
        onClick={prevSlideHandler}
        paddingTB="0.5rem"
        paddingLR="0.75rem"
        pos="absolute"
        z-index="2"
        top="50%"
        left="0"
      >
        <ArrowLeftSVG />
      </StyledButton>
      <StyledButton
        onClick={nextSlideHandler}
        paddingTB="0.5rem"
        paddingLR="0.75rem"
        pos="absolute"
        z-index="2"
        top="50%"
        left="none"
        right="0"
      >
        <ArrowRightSVG />
      </StyledButton>

      {CarouselData.map((slide, index) => {
        return (
          <>
            {/* <StyledCarouselImage> */}
            {index === current && (
              <StyledImg
                key={index}
                src={slide.src}
                height="100%"
                width="100%"
              />
            )}
            {/* </StyledCarouselImage> */}
          </>
        );
      })}
    </StyledCarousel>
  );
};

export default Carousel;
