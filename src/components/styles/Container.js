import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 1;
  top: 3rem;
  padding: ${(props) => props.paddingT} ${(props) => props.paddingLR}
    ${(props) => props.paddingB};
  background-color: #fff;
  min-width: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 651px) {
    display: block;
  }
`;
