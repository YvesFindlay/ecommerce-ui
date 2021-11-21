import styled from "styled-components";

export const StyledImg = styled.div`
  position: ${({ position }) => (position ? position : `relative`)};
  z-index: -1;
  left: ${({ left }) => (left ? left : "none")};
  //z-index: ${({ zindex }) => (zindex ? zindex : `-1`)};
  background: ${({ src }) => `url(${src})`};
  height: ${({ height }) => (height ? height : "210px")};
  width: ${({ width }) => (width ? width : "180px")};
  margin: ${({ marginTop }) => (marginTop ? marginTop : "0")}
    ${({ marginRight }) => (marginRight ? marginRight : "0")}
    ${({ marginBottom }) => (marginBottom ? marginBottom : "0")}
    ${({ marginLeft }) => (marginLeft ? marginLeft : "0")};

  min-width: 280px;

  @media (max-width: 700px) {
    width: ${({ mobWidth }) => mobWidth && mobWidth};
    position: relative;
    margin: 0;
  }

  background-position: center center;
  background-size: cover;
`;
