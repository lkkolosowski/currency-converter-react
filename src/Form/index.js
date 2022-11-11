import SelectBox from "./SelectBox";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import "./style.css";
import { currencies } from "../currencies.js";

const Form = () => {
  const [sourceCurrency, setSourceCurrency] = useState(currencies[0]);
  const [targetCurrency, setTargetCurrency] = useState(currencies[1]);
  const [amount, setAmount] = useState("1");

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onKeyPress = (event) => {
    if (event.code === "Minus") {
      event.preventDefault();
    }
  };

  const swapCurrencies = () => {
    setSourceCurrency(targetCurrency);
    setTargetCurrency(sourceCurrency);
  };

  const result = ((amount * targetCurrency.rate) / sourceCurrency.rate).toFixed(2);

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <legend align="center" className="form__legend">
          Konwerter walutowy
        </legend>
        <div className="form__wrapper">
          <label htmlFor="amount" className="form__label">
            Wprowadź ilość
          </label>
          <Input
            type="number"
            id="amount"
            min="0"
            disabled={false}
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            onKeyPress={onKeyPress}
          />
          <div className="form__column">
            <div className="form__row">
              <label htmlFor="source-currency" className="form__label">
                Przelicz z
              </label>
              <SelectBox
                src={`https://flagicons.lipis.dev/flags/4x3/${sourceCurrency.flag}.svg`}
                id="source-currency"
                value={sourceCurrency.code}
                onChange={({ target }) => setSourceCurrency(currencies.find(({ code }) => code === target.value))}
                currencyName={sourceCurrency.name}
              />
            </div>
            <div className="form__row">
              <Button onClick={swapCurrencies} />
            </div>
            <div className="form__row">
              <label htmlFor="target-currency" className="form__label">
                Przelicz na
              </label>
              <SelectBox
                src={`https://flagicons.lipis.dev/flags/4x3/${targetCurrency.flag}.svg`}
                id="target-currency"
                value={targetCurrency.code}
                onChange={({ target }) => setTargetCurrency(currencies.find(({ code }) => code === target.value))}
                currencyName={targetCurrency.name}
              />
            </div>
          </div>
          <label htmlFor="result" className="form__label">
            Kurs wymiany
          </label>
          <Input
            type="text"
            id="result"
            disabled={true}
            value={`${amount} ${sourceCurrency.code} = ${result} ${targetCurrency.code}`}
          />
        </div>
        <p className="form__paragraph form__paragraph--small">Kurs walut został zaktualizowany w dniu 28.09.2022</p>
      </fieldset>
    </form>
  );
};

export default Form;
