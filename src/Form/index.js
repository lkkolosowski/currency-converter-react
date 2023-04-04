import { useState, useEffect } from "react";
import Clock from "./Clock";
import Input from "./Input";
import SelectBox from "./SelectBox";
import SwapButton from "./SwapButton";
import SubmitButton from "./SubmitButton";
import Footer from "./Footer";
import Pending from "./Pending";
import Error from "./Error";
import { FormField, Fieldset, Section, PrimarySection, Title, Wrapper, Label, Column, Row } from "./styled";

const Form = ({ status, currencies, date }) => {
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (status === "success") {
      const initialSourceCurrency = currencies.find(({ code }) => code === "EUR");
      const initialTargetCurrency = currencies.find(({ code }) => code === "PLN");
      setSourceCurrency(initialSourceCurrency);
      setTargetCurrency(initialTargetCurrency);
      calculateResult(initialSourceCurrency, initialTargetCurrency);
    }
  }, [status]);

  const calculateResult = (source, target) => {
    const rate = +target.rate / +source.rate;

    if (amount === "") {
      setAmount("0");
    }

    setResult({
      sourceAmount: +amount,
      sourceCode: source.code,
      targetAmount: (+amount * rate).toFixed(2),
      targetCode: target.code,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(sourceCurrency, targetCurrency);
  };

  const onKeyPress = (event) => {
    if (event.code === "Minus") {
      event.preventDefault();
    }
  };

  const swapCurrencies = () => {
    setSourceCurrency(targetCurrency);
    setTargetCurrency(sourceCurrency);
    calculateResult(targetCurrency, sourceCurrency);
  };

  const dateFormat = "pl-PL";

  return (
    <FormField onSubmit={onSubmit}>
      <Fieldset>
        <Section as="header" align="right">
          <Clock dateFormat={dateFormat} />
        </Section>
        <PrimarySection>
          <Title>Konwerter walutowy</Title>
          <Wrapper className="form__wrapper">
            <Label htmlFor="amount">Wprowadź ilość</Label>
            <Input
              autoFocus={true}
              type="number"
              id="amount"
              min="0"
              step="1"
              disabled={false}
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              onKeyPress={onKeyPress}
            />
            <Column>
              {status === "pending" ? (
                <Pending />
              ) : status === "error" ? (
                <Error />
              ) : (
                <>
                  <Row>
                    <Label htmlFor="source-currency">Przelicz z</Label>
                    <SelectBox
                      src={`https://flagicons.lipis.dev/flags/4x3/${
                        sourceCurrency.flag !== undefined ? sourceCurrency.flag : "xx"
                      }.svg`}
                      id="source-currency"
                      value={sourceCurrency.code}
                      onChange={({ target }) => setSourceCurrency(currencies.find(({ code }) => code === target.value))}
                      currencyName={sourceCurrency.name}
                      currencies={currencies}
                    />
                  </Row>
                  <Row>
                    <SwapButton onClick={swapCurrencies} content={<i className="fas fa-exchange-alt"></i>} />
                  </Row>
                  <Row>
                    <Label htmlFor="target-currency">Przelicz na</Label>
                    <SelectBox
                      src={`https://flagicons.lipis.dev/flags/4x3/${
                        targetCurrency.flag !== undefined ? targetCurrency.flag : "xx"
                      }.svg`}
                      id="target-currency"
                      value={targetCurrency.code}
                      onChange={({ target }) => setTargetCurrency(currencies.find(({ code }) => code === target.value))}
                      currencyName={targetCurrency.name}
                      currencies={currencies}
                    />
                  </Row>
                </>
              )}
            </Column>
            <SubmitButton disabled={status === "success" ? false : true} content="Przelicz" />
            <Label htmlFor="result">Kurs wymiany</Label>
            <Input
              type="text"
              id="result"
              disabled={true}
              onChange={({ target }) => setTargetCurrency(currencies.find(({ code }) => code === target.value))}
              value={`${
                result
                  ? `${result.sourceAmount} ${result.sourceCode} = ${result.targetAmount} ${result.targetCode}`
                  : status === "error"
                  ? `-`
                  : `Trwa ładowanie danych ...`
              }`}
            />
          </Wrapper>
        </PrimarySection>
        <Section as="footer">
          <Footer status={status} date={date} dateFormat={dateFormat} />
        </Section>
      </Fieldset>
    </FormField>
  );
};

export default Form;
