import "./style.css";
import { currencies } from "../currencies.js";

const Form = () => {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend align="center" className="form__legend">
          Konwerter walutowy
        </legend>
        <div className="form__wrapper">
          <div className="form__amount">
            <label htmlFor="amount" className="form__label">
              Wprowadź ilość
            </label>
            <input type="number" id="amount" className="form__input" value="1" />
          </div>
          <div className="form__col">
            <div className="form__row">
              <label htmlFor="from-currency" className="form__label">
                Przelicz z
              </label>
              <div className="form__select-box">
                <select id="from-currency" className="form__select">
                  {currencies.map(({ code }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <p className="form__caption"></p>
              </div>
            </div>
            <div className="form__row">
              <p className="form__label">
                <i className="form__exchange-icon fas fa-exchange-alt"></i>
              </p>
            </div>
            <div className="form__row">
              <label htmlFor="to-currency" className="form__label">
                Przelicz na
              </label>
              <div className="form__select-box">
                <select id="to-currency" className="form__select">
                  {currencies.map(({ code }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <p className="form__caption"></p>
              </div>
            </div>
          </div>
          <p className="form__label">Kurs wymiany</p>
          <div className="form__result"></div>
        </div>
        <p className="form__paragraph form__paragraph--small">Kurs walut został zaktualizowany w dniu 28.09.2022</p>
      </fieldset>
    </form>
  );
};

export default Form;
