import { useEffect, useState } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const IntervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    console.log("Hook działa, bieżąca data:", date);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  return date;
};
