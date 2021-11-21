import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  z-index: 1;
  left: 0;
  bottom: 0;
  background-color: #cc9d6a;
  padding: 2.5rem 3rem 1.5rem;
  display: flex;
  justify-content: space-evenly;
  color: white;
  min-width: 280px;

  @media (max-width: 510px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  ul {
    display: flex;
    @media (max-width: 435px) {
      margin: 0.5rem 1rem;
    }
  }

  ul li {
    list-style: none;

    &:not(:nth-of-type(1)) {
      margin-left: 1.5rem;
    }

    @media (max-width: 510px) {
      margin-left: auto;
    }
  }

  ul a {
    text-decoration: none;
    color: #fff;
  }
`;
