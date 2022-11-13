import "./style.css";

const Form = ({
  onSubmit,
  amountInput,
  sourceCurrencySelectBox,
  button,
  targetCurrencySelectBox,
  resultInput,
  clock,
  footer,
}) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__fieldset">
        <p className="form__paragraph form__paragraph--right">{clock}</p>
        <h1 className="form__title">Konwerter walutowy</h1>
        <div className="form__wrapper">
          <label htmlFor="amount" className="form__label">
            Wprowadź ilość
          </label>
          {amountInput}
          <div className="form__column">
            <div className="form__row">
              <label htmlFor="source-currency" className="form__label">
                Przelicz z
              </label>
              {sourceCurrencySelectBox}
            </div>
            <div className="form__row">{button}</div>
            <div className="form__row">
              <label htmlFor="target-currency" className="form__label">
                Przelicz na
              </label>
              {targetCurrencySelectBox}
            </div>
          </div>
          <label htmlFor="result" className="form__label">
            Kurs wymiany
          </label>
          {resultInput}
        </div>
        <p className="form__paragraph">{footer}</p>
      </fieldset>
    </form>
  );
};

export default Form;
