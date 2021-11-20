import React from "react";

import { StyledFooter } from "../styles/Footer.style";
import YoutubeSVG from "../../svg/Youtube";
import TwitterSVG from "../../svg/Twitter";
import InstagramSVG from "../../svg/Instagram";
import FacebookSVG from "../../svg/Facebook";

const Footer = () => {
  return (
    <StyledFooter>
      <span>&#169; ClothesCo 2021.</span>
      <ul>
        <li>
          <a href="/">
            <span>
              <YoutubeSVG />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <span>
              <TwitterSVG />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <span>
              <InstagramSVG />
            </span>
          </a>
        </li>
        <li>
          <a href="/">
            {" "}
            <span>
              <FacebookSVG />
            </span>
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
