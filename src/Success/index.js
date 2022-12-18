import { Paragraph, Span } from "./styled";
import { useAPI } from "../useAPI";

const Success = () => {
  const currenciesData = useAPI();

  return (
    <Paragraph>
      <Span>
        Wszystko poprawnie 👌
        <br />({`${currenciesData.status}`})
      </Span>
    </Paragraph>
  );
};

export default Success;
