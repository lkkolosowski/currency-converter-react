import { useState, useEffect } from "react";
import axios from "axios";
import { currencyNamesData } from "./currencyNamesData";

export const useCurrencies = () => {
  const [currenciesData, setCurrenciesData] = useState({
    status: "pending",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate.host/latest?symbols=PLN,USD,EUR,JPY,CZK,HRK,CHF,GBP,INR,SEK,KRW,CNY&base=PLN&${Math.floor(
            Math.random() * 9999
          )}`
        );
        const currencyRatesData = Object.entries(response.data.rates).map(([code, rate]) => ({ code, rate }));
        const mergeArrays = (names, rates) => {
          return names.map((item, i) => {
            if (item.code === rates[i].code) {
              return Object.assign({}, item, rates[i]);
            }
            return null;
          });
        };
        setCurrenciesData({
          date: response.data.date,
          currencies: mergeArrays(currencyNamesData, currencyRatesData),
          status: "success",
        });
      } catch (error) {
        setCurrenciesData({
          status: "error",
        });
      }
    };
    setTimeout(fetchData, 2000);
  }, []);

  return currenciesData;
};
