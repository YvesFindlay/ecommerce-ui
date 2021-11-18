import React from "react";

import { StyledNav } from "../styles/Nav.styled";

// {useState, useEffect

import "./Nav.css";

const Nav = (props) => {
  let navClasses = "nav";

  return (
    <header className={navClasses}>
      <nav className="nav__navigation">
        <div className="nav__logo">
          {" "}
          <a href="/">ClothesCo</a>{" "}
        </div>
        <div className="nav__spacer" />
        {/* <div className="nav__hamburger"></div> */}
        <div className="nav__navigation-items">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav__spacer" />
        <div className="nav__navigation-items">
          <ul>
            <li>
              <a href="/">Log In</a>
            </li>
            <li>
              <a href="/">Cart(0)</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
