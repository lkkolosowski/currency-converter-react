import { useState, useEffect } from "react";
import Clock from "./Clock";
import Input from "./Input";
import SelectBox from "./SelectBox";
import SwapButton from "./SwapButton";
import SubmitButton from "./SubmitButton";
import Footer from "./Footer";
import Loader from "./Loader";
import Error from "./Error";
import {
  FormField,
  Fieldset,
  Section,
  PrimarySection,
  Title,
  Wrapper,
  Label,
  Column,
  Row,
  MiddleRow,
} from "./styled";
import Result from "./Result";

const Form = ({ status, currencies, date }) => {
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState("1");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (status === "success") {
      const initialSourceCurrency = currencies.find(
        ({ code }) => code === "EUR"
      );
      const initialTargetCurrency = currencies.find(
        ({ code }) => code === "PLN"
      );
      setSourceCurrency(initialSourceCurrency);
      setTargetCurrency(initialTargetCurrency);
      calculateResult(initialSourceCurrency, initialTargetCurrency);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, currencies]);

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
              {status === "error" ? (
                <Error />
              ) : (
                <>
                  <Row>
                    <Label htmlFor="source-currency">Przelicz z</Label>
                    <SelectBox
                      src={`https://flagicons.lipis.dev/flags/4x3/${
                        status === "success" ? sourceCurrency.flag : "eu"
                      }.svg`}
                      id="source-currency"
                      value={sourceCurrency.code || "EUR"}
                      onChange={({ target }) =>
                        setSourceCurrency(
                          currencies.find(({ code }) => code === target.value)
                        )
                      }
                      currencyName={sourceCurrency.name || "Euro"}
                      currencies={currencies}
                    />
                  </Row>
                  <MiddleRow>
                    {status === "pending" ? (
                      <Loader />
                    ) : (
                      <SwapButton onClick={swapCurrencies} />
                    )}
                  </MiddleRow>
                  <Row>
                    <Label htmlFor="target-currency">Przelicz na</Label>
                    <SelectBox
                      src={`https://flagicons.lipis.dev/flags/4x3/${
                        status === "success" ? targetCurrency.flag : "pl"
                      }.svg`}
                      id="target-currency"
                      value={targetCurrency.code || "PLN"}
                      onChange={({ target }) =>
                        setTargetCurrency(
                          currencies.find(({ code }) => code === target.value)
                        )
                      }
                      currencyName={targetCurrency.name || "Złoty polski"}
                      currencies={currencies}
                    />
                  </Row>
                </>
              )}
            </Column>
            <SubmitButton
              disabled={status === "success" ? false : true}
              content="Przelicz"
            />
            <Label htmlFor="result">Kurs wymiany</Label>
            <Result
              type="text"
              id="result"
              isLoading={status === "pending"}
              isFailure={status === "error"}
              status={status}
              result={result}
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
