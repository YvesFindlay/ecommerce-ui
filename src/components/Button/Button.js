import React from "react";

import { StyledButton } from "../styles/Button.style";

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
