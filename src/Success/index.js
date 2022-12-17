import { Paragraph, Span } from "./styled";

const Success = ({ currencies, status }) => {
  return (
    <Paragraph>
      <Span>
        Wszystko poprawnie 👌
        <br />
        {currencies.map(({ code, name }) => (
          <option key={code} value={code}>
            {code} {name}
          </option>
        ))}
        ({`${status}`})
      </Span>
    </Paragraph>
  );
};

export default Success;
