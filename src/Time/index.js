import React, { useState, useEffect } from "react";
import { StyledTime } from "./styled";

export const Time = () => {
  const [newDate, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <StyledTime>
      {" "}
      {newDate.toLocaleString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",

        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })}
    </StyledTime>
  );
};

export default Time;
