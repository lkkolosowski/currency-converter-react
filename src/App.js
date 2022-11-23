import { useState } from "react";
import Container from "./Container";
import Clock from "./Clock";
import Form from "./Form";
import SelectBox from "./Form/SelectBox";
import Input from "./Form/Input";
import SwapButton from "./Form/SwapButton";
import SubmitButton from "./Form/SubmitButton";
import Footer from "./Form/Footer";
import { currencies } from "./currencies.js";
import { SafeAreaView, View, StatusBar } from "react-native";

function App() {
  const [sourceCurrency, setSourceCurrency] = useState(currencies[0]);
  const [targetCurrency, setTargetCurrency] = useState(currencies[1]);
  const [amount, setAmount] = useState("");
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
    <SafeAreaView>
      <StatusBar hidden />
      <View>
        <Container>
          <Form
            clock={<Clock dateFormat={dateFormat} />}
            onSubmit={onSubmit}
            amountInput={
              <Input
                autoFocus={true}
                type="number"
                id="amount"
                min="0"
                step="0.01"
                disabled={false}
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                onKeyPress={onKeyPress}
              />
            }
            sourceCurrencySelectBox={
              <SelectBox
                src={`https://flagicons.lipis.dev/flags/4x3/${sourceCurrency.flag}.svg`}
                id="source-currency"
                value={sourceCurrency.code}
                onChange={({ target }) => setSourceCurrency(currencies.find(({ code }) => code === target.value))}
                currencyName={sourceCurrency.name}
              />
            }
            targetCurrencySelectBox={
              <SelectBox
                src={`https://flagicons.lipis.dev/flags/4x3/${targetCurrency.flag}.svg`}
                id="target-currency"
                value={targetCurrency.code}
                onChange={({ target }) => setTargetCurrency(currencies.find(({ code }) => code === target.value))}
                currencyName={targetCurrency.name}
              />
            }
            swapButton={<SwapButton onClick={swapCurrencies} content={<i className="fas fa-exchange-alt"></i>} />}
            resultInput={
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
            }
            submitButton={<SubmitButton content="Przelicz" />}
            footer={<Footer dateFormat={dateFormat} />}
          />
        </Container>
      </View>
    </SafeAreaView>
  );
}

export default App;
