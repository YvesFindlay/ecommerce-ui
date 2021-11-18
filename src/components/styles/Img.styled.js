import styled from "styled-components";

export const StyledImg = styled.div`
  background: url(${`IMG_6812.jpeg`});
  height: 210px;
  width: 180px;
  background-position: center;
  background-position: center center;
  background-size: cover;
  margin: ${(props) => props.marginT} auto;
`;
