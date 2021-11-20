import styled from "styled-components";

export const StyledSearch = styled.input`
  position: relative;
  z-index: 1;
  width: 15.6rem;
  border: none;
  background: none;
  padding: 0.35rem 0;
  border-bottom: 1px solid black;
  margin: 1rem 0 0 7.35vw;
  outline: none;

  &::placeholder {
    color: #000;
  }

  @media (max-width: 580px) {
    margin: 1rem 0 0 0.7rem;
  }

  @media (max-width: 300px) {
    width: min(200px, 90%);
  }
`;
