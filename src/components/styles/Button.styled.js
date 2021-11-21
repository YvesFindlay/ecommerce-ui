import styled from "styled-components";

export const StyledButton = styled.button`
  position: ${({ pos }) => pos || "static"};
  z-index: ${({ num }) => num || "initial"};
  top: ${({ top }) => top || "0"};
  left: ${({ left }) => left || "0"};
  right: ${({ right }) => right || "0"};
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0 0.15);
  border: ${({ hoverColor }) =>
    hoverColor ? `2px solid ${hoverColor}` : `none`};
  font-size: 1.05rem;
  font-weight: 600;
  padding: ${({ paddingTB }) => paddingTB || "0.45rem"}
    ${({ paddingLR }) => paddingLR || "1rem"};
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#fff"};
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ hoverBG }) => hoverBG || "none"};
    border: ${({ hoverColor }) =>
      hoverColor ? `2px solid ${hoverColor}` : `none`};

    color: ${({ hoverColor }) => (hoverColor ? `${hoverColor}` : `none`)};
  }
`;
