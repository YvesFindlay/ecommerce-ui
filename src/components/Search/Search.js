import React, { useRef, useEffect } from "react";

import { StyledSearch } from "../styles/Search.styled";

const Search = () => {
  const inputSearchRef = useRef(null);

  useEffect(() => {
    inputSearchRef.current.placeholder = "Search";
  }, []);

  return <StyledSearch ref={inputSearchRef} />;
};

export default Search;
