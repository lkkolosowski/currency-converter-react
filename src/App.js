import Container from "./Container";
import Pending from "./Pending";
import Success from "./Success";
// import Form from "./Form";
import Error from "./Error";
import { useAPI } from "./useAPI";
import { useCurrencies } from "./useCurrencies";

function App() {
  const currenciesData = useAPI();
  const currencies = useCurrencies();
  console.log(currenciesData.status);
  console.log(currencies);

  if (currenciesData.status === "pending") {
    return (
      <Container>
        <Pending status={currenciesData.status} />
      </Container>
    );
  } else if (currenciesData.status === "success") {
    return (
      <Container>
        <Success currencies={currencies} status={currenciesData.status} />
        {/* <Form currencies={currencies} /> */}
      </Container>
    );
  } else if (currenciesData.status === "error") {
    return (
      <Container>
        <Error status={currenciesData.status} />
      </Container>
    );
  } else {
    <Container>
      <>Inny błąd</>
    </Container>;
  }
}

export default App;
