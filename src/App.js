import Container from "./Container";
import Form from "./Form";
import { useCurrencies } from "./useCurrencies";

function App() {
  const currenciesData = useCurrencies();
  const currencies = currenciesData.currencies;

  return (
    <Container>
      <Form currenciesData={currenciesData} currencies={currencies} />
    </Container>
  );
}

export default App;
