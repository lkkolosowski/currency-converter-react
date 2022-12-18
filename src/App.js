import Container from "./Container";
import Pending from "./Pending";
import Form from "./Form";
import Error from "./Error";
import { useAPI } from "./useAPI";
import { useCurrencies } from "./useCurrencies";

function App() {
  const currenciesData = useAPI();
  const currencies = useCurrencies();

  return (
    <Container>
      {currenciesData.status === "pending" && currencies.length === 0 ? (
        <Pending status={currenciesData.status} />
      ) : currenciesData.status === "success" && currencies.length > 0 ? (
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
