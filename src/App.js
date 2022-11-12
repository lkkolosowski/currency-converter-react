import { useState } from "react";
import Form from "./Form";
import SelectBox from "./Form/SelectBox";
import Input from "./Form/Input";
import Button from "./Form/Button";
import { currencies } from "./currencies.js";

function App() {
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
    <Form
      onSubmit={onSubmit}
      amountInput={
        <Input
          type="number"
          id="amount"
          min="0"
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
      button={<Button onClick={swapCurrencies} content={<i className="fas fa-exchange-alt"></i>} />}
      targetCurrencySelectBox={
        <SelectBox
          src={`https://flagicons.lipis.dev/flags/4x3/${targetCurrency.flag}.svg`}
          id="target-currency"
          value={targetCurrency.code}
          onChange={({ target }) => setTargetCurrency(currencies.find(({ code }) => code === target.value))}
          currencyName={targetCurrency.name}
        />
      }
      resultInput={
        <Input
          type="text"
          id="result"
          disabled={true}
          value={`${amount} ${sourceCurrency.code} = ${result} ${targetCurrency.code}`}
        />
      }
    />
  );
}

export default App;
