import React from "react";
import { useCurrentDate } from "./useCurrentDate";
import { StyledTime } from "./styled";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
export const Time = () => {
  const date = useCurrentDate();

  return <StyledTime> {formatDate(date)}</StyledTime>;
};

export default Time;
