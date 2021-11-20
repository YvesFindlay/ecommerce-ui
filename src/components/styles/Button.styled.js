import styled from "styled-components";

export const StyledButton = styled.button`
  position: ${({ pos }) => pos || "static"};
  z-index: ${({ num }) => num || "initial"};
  top: ${({ top }) => top || "0"};
  left: ${({ left }) => left || "0"};
  right: ${({ right }) => right || "0"};
  border: none;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0 0.15);
  font-size: 0.85rem;
  font-weight: 600;
  padding: ${({ paddingTB }) => paddingTB || "0.45rem"}
    ${({ paddingLR }) => paddingLR || "1rem"};
  background-color: ${({ bg }) => bg || "#000"};
  color: ${({ color }) => color || "#fff"};
  display: grid;
  place-items: center;
  cursor: pointer;
`;
