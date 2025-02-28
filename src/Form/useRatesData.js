import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ state: "loading" });

    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_h5d5z58athyWIiJ8Gw24js5OQo6E1CpKv3jD8DDm")
                .then((response) => {
                    if (!response.ok) throw new Error(response.statusText);
                    return response.json();
                })
                .then((data) => {
                    const rates = { PLN: { value: 1 }, ...data.data };

                    const formattedDate = new Date(data.meta.last_updated_at).toLocaleDateString("pl-PL", {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                    });

                    setRatesData({ state: "success", rates, date: formattedDate });
                })
                .catch(() => {
                    setRatesData({ state: "error" });
                });
        }, 1000);
    }, []);

    return ratesData;
};
