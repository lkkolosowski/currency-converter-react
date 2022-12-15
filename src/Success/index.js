import { Paragraph, Span } from "./styled";

const Success = ({ currencies, status }) => {

  return (
    <Paragraph>
      <Span>
        Wszystko poprawnie 👌
        <br />
        {`${currencies[9].code}`}{` — `}{`${currencies[9].name}`}
        <br />
        ({`${status}`})
      </Span>
    </Paragraph>
  );
};

export default Success;
