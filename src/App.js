import Container from "./Container";
import Form from "./Form";
import { useCurrencies } from "./useCurrencies";

function App() {
  const { currencies, status, date } = useCurrencies();

  return (
    <Container>
      <Form date={date} status={status} currencies={currencies} />
    </Container>
  );
}

export default App;
