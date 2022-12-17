import { useState, useEffect } from "react";
import { useAPI } from "./useAPI";
import { namesData } from "./namesData";

export const useCurrencies = () => {
  const currenciesData = useAPI();
  const ratesData = currenciesData.ratesData;
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const waitForData = (time) =>
      new Promise((resolve, reject) => {
        setTimeout(resolve(), time);
      });

    waitForData(1000).then(() => {

      const mergeArrays = (names, rates) => {
        return names.map((item, i) => {
          if (item.code === rates[i].code) {
            //merging two objects
            return Object.assign({}, item, rates[i]);
          }
          return null;
        });
      };
      if (currenciesData.status === "success") {
        setCurrencies(mergeArrays(namesData, ratesData));
      }
    });
  }, [ratesData, currenciesData.status]);

  return currencies;
};
