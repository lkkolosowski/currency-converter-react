import Container from "./Container";
import Form from "./Form";
import { useCurrencies } from "./useCurrencies";

function App() {
  const currenciesData = useCurrencies();
  const currencies = currenciesData.currencies;
  const status = currenciesData.status;
  const date = currenciesData.date;

  return (
    <Container>
      <Form date={date} status={status} currencies={currencies} />
    </Container>
  );
}

export default App;
