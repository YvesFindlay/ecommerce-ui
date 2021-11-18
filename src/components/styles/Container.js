import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: -2;
  top: 4rem;
  max-width: 100%;
  padding: 3rem ${(props) => props.paddingSides};
  border: 1px solid gold;
`;
