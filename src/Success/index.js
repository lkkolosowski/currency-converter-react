import { Paragraph, Span } from "./styled";

const Success = ({ currencies }) => {

  return (
    <Paragraph>
      <Span>
        Wszystko poprawnie 👌
        <br />
        (success)
        <br />
        {`${currencies[9].code}`}{` — `}{`${currencies[9].name}`}
      </Span>
    </Paragraph>
  );
};

export default Success;
