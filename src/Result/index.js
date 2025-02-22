import React from "react";
import { StyledResult } from "./styled";

const Result = ({ result }) => {
  return (
    <StyledResult>Kwota po przeliczeniu: {(+result).toFixed(2)}</StyledResult>
  );
};

export default Result;
