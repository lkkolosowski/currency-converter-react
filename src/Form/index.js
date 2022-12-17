import { useState } from "react";
import Clock from "../Clock";
import Input from "./Input";
import SelectBox from "./SelectBox";
import SwapButton from "./SwapButton";
import SubmitButton from "./SubmitButton";
import Footer from "./Footer";
import { FormField, Fieldset, Section, PrimarySection, Title, Wrapper, Label, Column, Row } from "./styled";

const Form = ({ currencies }) => {
  const [sourceCurrency, setSourceCurrency] = useState(currencies.find(({ code }) => code === "USD"));
  const [targetCurrency, setTargetCurrency] = useState(currencies.find(({ code }) => code === "PLN"));
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState("");

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
              <Row>
                <Label htmlFor="source-currency">Przelicz z</Label>
                <SelectBox
                  src={`https://flagicons.lipis.dev/flags/4x3/${sourceCurrency.flag}.svg`}
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
                  src={`https://flagicons.lipis.dev/flags/4x3/${targetCurrency.flag}.svg`}
                  id="target-currency"
                  value={targetCurrency.code}
                  onChange={({ target }) => setTargetCurrency(currencies.find(({ code }) => code === target.value))}
                  currencyName={targetCurrency.name}
                  currencies={currencies}
                />
              </Row>
            </Column>
            <SubmitButton content="Przelicz" />
            <Label htmlFor="result">Kurs wymiany</Label>
            <Input
              type="text"
              id="result"
              disabled={true}
              value={`${
                result.sourceAmount !== undefined
                  ? `${result.sourceAmount} ${result.sourceCode} = ${result.targetAmount} ${result.targetCode}`
                  : ``
              }`}
            />
          </Wrapper>
        </PrimarySection>
        <Section as="footer">
          <Footer dateFormat={dateFormat} />
        </Section>
      </Fieldset>
    </FormField>
  );
};

export default Form;
