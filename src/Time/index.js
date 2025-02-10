import React, { useState, useEffect } from "react";
import "./style.css";

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
    <div className="time">
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
    </div>
  );
};

export default Time;
