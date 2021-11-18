import React, { useEffect } from "react";

import { StyledProduct } from "../styles/Product.styled";
import { Container } from "../styles/Container";
import { StyledImg } from "../styles/Img.styled";

const Product = () => {
  //   const inputSearchRef = useRef(null);

  //   useEffect(() => {
  //     inputSearchRef.current.placeholder = "Search".toUpperCase();
  //   }, []);

  return (
    <StyledProduct>
      <Container>
        <StyledImg />
      </Container>
    </StyledProduct>
  );
};

export default Product;
