import Container from "./Container";
import Pending from "./Pending";
import Form from "./Form";
import Error from "./Error";
import { useCurrencies } from "./useCurrencies";

function App() {
  const currenciesData = useCurrencies();
  const currencies = currenciesData.currencies;

  return (
    <Container>
      {currenciesData.status === "pending" ? (
        <Pending status={currenciesData.status} />
      ) : currenciesData.status === "success" ? (
        <Form currenciesData={currenciesData} currencies={currencies} />
      ) : currenciesData.status === "error" ? (
        <Error status={currenciesData.status} />
      ) : (
        <Pending status={currenciesData.status} />
      )}
    </Container>
  );
}

export default App;
