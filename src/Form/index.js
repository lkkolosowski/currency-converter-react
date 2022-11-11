import Select from "./Select";
import Input from "./Input";
import Image from "./Image";
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
              <div className="form__select-box">
                <Image src={`https://flagicons.lipis.dev/flags/4x3/${sourceCurrency.flag}.svg`} />
                <Select
                  id="source-currency"
                  value={sourceCurrency.code}
                  onChange={({ target }) => setSourceCurrency(currencies.find(({ code }) => code === target.value))}
                />
                <p className="form__caption">{sourceCurrency.name}</p>
              </div>
            </div>
            <div className="form__row">
              <button className="form__exchange" onClick={swapCurrencies}>
                <i className="form__exchange-icon fas fa-exchange-alt"></i>
              </button>
            </div>
            <div className="form__row">
              <label htmlFor="target-currency" className="form__label">
                Przelicz na
              </label>
              <div className="form__select-box">
                <Image src={`https://flagicons.lipis.dev/flags/4x3/${targetCurrency.flag}.svg`} />
                <Select
                  id="target-currency"
                  value={targetCurrency.code}
                  onChange={({ target }) => setTargetCurrency(currencies.find(({ code }) => code === target.value))}
                />
                <p className="form__caption">{targetCurrency.name}</p>
              </div>
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
