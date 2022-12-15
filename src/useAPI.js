import { useState, useEffect } from "react";
import axios from "axios";

export const useAPI = () => {
  const [currenciesData, setCurrenciesData] = useState({
    date: null,
    ratesData: false,
    currencies: false,
    status: "pending",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("rates.json");
        setCurrenciesData({
          date: response.data.date,
          ratesData: Object.entries(response.data.rates).map(([code, rate]) => ({ code, rate })),
          status: "success",
        });
      } catch (error) {
        setCurrenciesData({
          status: "error",
        });
      }
    };
    setTimeout(fetchData, 1000);
  }, []);

  return currenciesData;
};
