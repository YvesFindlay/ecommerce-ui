import styled from "styled-components";

export const StyledSearch = styled.input`
  position: relative;
  z-index: 1;
  width: 30vmin;
  min-width: 280px;
  border: none;
  background: none;
  padding: 0.35rem 0;
  border-bottom: 1px solid black;
  margin: 1rem 0 0 0;
  outline: none;

  &::placeholder {
    color: #cc9d6a;
  }

  @media (min-width: 580px) {
    margin-left: 8.75vw;
  }

  @media (max-width: 580px) {
    margin: 1rem 0 0 0;
  }

  @media (max-width: 300px) {
    width: min(200px, 90%);
  }
`;
