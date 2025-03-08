import { useState, useEffect } from "react";

const API_URL =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_h5d5z58athyWIiJ8Gw24js5OQo6E1CpKv3jD8DDm";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({ state: "loading" });

  useEffect(() => {
    setTimeout(() => {
      fetch(API_URL)
        .then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
        .then((data) => {
          const rates = { PLN: { value: 1 }, ...data.data };
          setRatesData({
            state: "success",
            rates,
            lastUpdated: data.meta.last_updated_at,
          });
        })
        .catch(() => {
          setRatesData({ state: "error" });
        });
    }, 1000);
  }, []);

  return ratesData;
};
