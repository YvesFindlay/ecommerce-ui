import React, { useState } from "react";

import { StyledHeader } from "../styles/Nav.styled";
import { StyledNav } from "../styles/Nav.styled";
import { StyledNavLogo } from "../styles/Nav.styled";
import { Spacer } from "../styles/Nav.styled";
import { StyledNavItems } from "../styles/Nav.styled";
import { Button } from "../styles/Button.styled";
import useWindowSize from "../../Hooks/useWindowSize";

const Nav = () => {
  const { width: windowWidth } = useWindowSize();

  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavLogo>
          {" "}
          <a href="/">ClothesCo</a>{" "}
        </StyledNavLogo>
        <Spacer />
        {windowWidth >= 680 && (
          <StyledNavItems>
            <ul>
              <li>
                <a href="/">Women</a>
              </li>
              <li>
                <a href="/">Men</a>
              </li>
              <li>
                <a href="/">Boys</a>
              </li>
              <li>
                <a href="/">Girls</a>
              </li>
            </ul>
          </StyledNavItems>
        )}
        <Spacer />
        <StyledNavItems>
          <ul>
            <li>
              <a href="/">Log In</a>
            </li>
            <li>
              <a href="/">Cart(0)</a>
            </li>
          </ul>
        </StyledNavItems>
        {/* <Button>Cart</Button> */}
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
