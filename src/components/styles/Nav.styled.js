import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
`;

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 3rem;

  @media (max-width: 580px) {
    padding: 1rem 0.8rem;
  }
`;

export const StyledNavLogo = styled.div`
  a {
    color: #000;
    list-style: none;
    text-decoration: none;
    font-weight: 300;
    font-size: 2.2rem;

    @media (max-width: 580px) {
      font-size: 1.5rem;
    }
  }
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const StyledNavItems = styled.div`
  ul {
    display: flex;
    list-style: none;
  }

  ul li {
    padding: 0 1rem;

    @media (max-width: 580px) {
      padding: 0 0.5rem;
    }
  }

  ul a {
    text-decoration: none;
    color: #000;
    font-size: 1.1rem;
    display: inline-block;
    position: relative;

    &::after {
      position: absolute;
      display: block;
      content: "";
      bottom: -5%;
      width: 100%;
      height: 1px;
      transform: scaleX(0);
      transition: transform 0.3s ease-out;
      transform-origin: right;
      background-color: #000;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;
