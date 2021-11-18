import styled from "styled-components";

export const StyledSearch = styled.input`
  position: relative;
  z-index: 1;
  display: block;
  width: 16rem;
  border: none;
  padding: 0.2rem 0;
  border-bottom: 1px solid black;
  margin: 1rem 0 0 10vw;
  outline: none;

  // &:after {
  //   position: absolute;
  //   z-index: 5;
  //   display: block;
  //   content: "";
  //   bottom: 0;
  //   left: 0;
  //   height: 3px;
  //   width: 100%;
  //   background: purple;
  //   border: 1px solid blue;
  // }
`;
