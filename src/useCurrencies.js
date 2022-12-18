import { useState, useEffect } from "react";
import axios from "axios";
import { namesData } from "./namesData";

export const useCurrencies = () => {
  const [currenciesData, setCurrenciesData] = useState({
    date: undefined,
    currencies: [],
    status: "pending",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("rates.json");
        const response = await axios.get("https://api.exchangerate.host/latest?symbols=PLN,USD,EUR,JPY,CZK,HRK,CHF,GBP,INR,SEK,KRW,CNY&base=PLN");
        const ratesData = Object.entries(response.data.rates).map(([code, rate]) => ({ code, rate }));
        const mergeArrays = (names, rates) => {
          return names.map((item, i) => {
            if (item.code === rates[i].code) {
              //merging two objects
              return Object.assign({}, item, rates[i]);
            }
            return null;
          });
        };
        setCurrenciesData({
          date: response.data.date,
          currencies: mergeArrays(namesData, ratesData),
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