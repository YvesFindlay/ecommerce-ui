import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 1;
  top: ${({ top }) => top};
  padding: ${({ paddingT }) => paddingT} ${(paddingLR) => paddingLR}
    ${(paddingB) => paddingB};
  background-color: #fff;
  min-width: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ marginB }) => marginB};

  input {
    margin-bottom: 8rem;
  }

  @media (min-width: 651px) {
    display: block;
  }
`;
