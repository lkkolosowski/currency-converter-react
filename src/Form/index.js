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

  const exchange = () => {
    setSourceCurrency(targetCurrency);
    setTargetCurrency(sourceCurrency);
  }

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
          <input
            type="number"
            id="amount"
            className="form__input"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
          <div className="form__col">
            <div className="form__row">
              <label htmlFor="source-currency" className="form__label">
                Przelicz z
              </label>
              <div className="form__select-box">
                <img
                  className="form__image"
                  src={`https://flagicons.lipis.dev/flags/4x3/${sourceCurrency.flag}.svg`}
                  alt="flag"
                />
                <select
                  id="source-currency"
                  className="form__select"
                  value={sourceCurrency.code}
                  onChange={({ target }) => setSourceCurrency(currencies.find(({ code }) => code === target.value))}
                >
                  {currencies.map(({ code }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <p className="form__caption">{sourceCurrency.name}</p>
              </div>
            </div>
            <div className="form__row">
              <button
                className="form__exchange"
                onClick={exchange}
              >
                <i className="form__exchange-icon fas fa-exchange-alt"></i>
              </button>
            </div>
            <div className="form__row">
              <label htmlFor="target-currency" className="form__label">
                Przelicz na
              </label>
              <div className="form__select-box">
                <img
                  className="form__image"
                  src={`https://flagicons.lipis.dev/flags/4x3/${targetCurrency.flag}.svg`}
                  alt="flag"
                />
                <select
                  id="target-currency"
                  className="form__select"
                  value={targetCurrency.code}
                  onChange={({ target }) => setTargetCurrency(currencies.find(({ code }) => code === target.value))}
                >
                  {currencies.map(({ code }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <p className="form__caption">{targetCurrency.name}</p>
              </div>
            </div>
          </div>
          <label htmlFor="result" className="form__label">
            Kurs wymiany
          </label>
          <input type="text" id="result" disabled className="form__input" value={`${amount} ${sourceCurrency.code} = ${(amount*targetCurrency.rate/sourceCurrency.rate).toFixed(2)} ${targetCurrency.code}`} />
        </div>
        <p className="form__paragraph form__paragraph--small">Kurs walut został zaktualizowany w dniu 28.09.2022</p>
      </fieldset>
    </form>
  );
};

export default Form;
