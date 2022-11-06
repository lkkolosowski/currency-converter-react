import "./style.css";
import { currencies } from "../currencies.js";

const Form = () => {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
      <legend align="center" className="form__legend">Konwerter walutowy</legend>
        <div className="form__wrapper">
          <div className="form__amount">
            <p className="form__paragraph">Wprowadź ilość</p>
            <input type="number" className="form__input js-amount" value="1" />
          </div>
          <div className="form__col">
            <div className="form__row">
              <p className="form__paragraph">Przelicz z</p>
              <div className="form__select-box">
                <select className="form__select">
                  {currencies.map(({ code }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <p className="form__caption js-caption"></p>
              </div>
            </div>
            <div className="form__row">
              <p className="form__paragraph">
                <i className="form__exchange-icon fas fa-exchange-alt js-exchange-icon"></i>
              </p>
            </div>
            <div className="form__row">
              <p className="form__paragraph">Przelicz na</p>
              <div className="form__select-box">
                <select className="form__select">
                  {currencies.map(({ code }) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
                <p className="form__caption js-caption"></p>
              </div>
            </div>
          </div>
          <p className="form__paragraph">Kurs wymiany</p>
          <div className="form__result js-result-text"></div>
        </div>
        <p className="form__paragraph form__paragraph--small">Kurs walut został zaktualizowany w dniu 28.09.2022</p>
      </fieldset>
    </form>
  );
};

export default Form;
