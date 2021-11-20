import styled from "styled-components";

export const StyledImg = styled.div`
  position: relative;
  z-index: -1;
  background: ${({ src }) => `url(${src})`};
  height: ${(props) => (props.height ? props.height : "210px")};
  width: ${(props) => (props.width ? props.width : "180px")};
  background-position: center center;
  background-size: cover;
`;
