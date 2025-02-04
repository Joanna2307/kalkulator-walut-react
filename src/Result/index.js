import React from "react";
import "./style.css";

const Result = ({ result }) => {
  return (
    <p className="form__result" name="result">
      Kwota po przeliczeniu: {(+result).toFixed(2)}
    </p>
  );
};

export default Result;
