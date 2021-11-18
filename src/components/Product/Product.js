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
    <>
      <StyledProduct>
        <Container paddingT="1rem" paddingB="0">
          <StyledImg marginT="1rem" />
          <StyledImg marginT="2rem" />
        </Container>
      </StyledProduct>
    </>
  );
};

export default Product;
