import styled from "styled-components";

export const StyledSearch = styled.input`
  position: relative;
  width: 15.6rem;
  border: none;
  padding: 0.35rem 0;
  border-bottom: 1px solid black;
  margin: 1rem 0 0 7.35vw;
  outline: none;

  &::placeholder {
    color: #000;
  }

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
