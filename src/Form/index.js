import { useState, useEffect } from "react";
import Clock from "../Clock";
import Input from "./Input";
import SelectBox from "./SelectBox";
import SwapButton from "./SwapButton";
import SubmitButton from "./SubmitButton";
import Footer from "./Footer";
import Loader from "./Loader";
import Error from "../Error";
import { FormField, Fieldset, Section, PrimarySection, Title, Wrapper, Label, Column, Row } from "./styled";

const Form = ({ currenciesData, currencies }) => {
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (currenciesData.status === "success") {
      setSourceCurrency(currencies.find(({ code }) => code === "USD"));
      setTargetCurrency(currencies.find(({ code }) => code === "PLN"));
    }
    if (sourceCurrency === currencies.find(({ code }) => code === "USD")) {
      calculateResult();
    }
  }, [currenciesData.status, sourceCurrency]);

  const calculateResult = () => {
    const rate = +targetCurrency.rate / +sourceCurrency.rate;

    setResult({
      sourceAmount: +amount,
      sourceCode: sourceCurrency.code,
      targetAmount: (+amount * rate).toFixed(2),
      targetCode: targetCurrency.code,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult();
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

  const dateFormat = undefined;

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
              {currenciesData.status === "pending" ? (
                <Loader />
              ) : currenciesData.status === "error" ? (
                <Error status={currenciesData.status} />
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
            <SubmitButton content="Przelicz" />
            <Label htmlFor="result">Kurs wymiany</Label>
            <Input
              type="text"
              id="result"
              disabled={true}
              value={`${
                currenciesData.status === "pending" || result.targetCode === undefined
                  ? "wczytuję dane ..."
                  : currenciesData.status === "success" && result.targetCode !== undefined
                  ? `${result.sourceAmount} ${result.sourceCode} = ${result.targetAmount} ${result.targetCode}`
                  : ""
              }`}
            />
          </Wrapper>
        </PrimarySection>
        <Section as="footer">
          <Footer currenciesData={currenciesData} dateFormat={dateFormat} />
        </Section>
      </Fieldset>
    </FormField>
  );
};

export default Form;
