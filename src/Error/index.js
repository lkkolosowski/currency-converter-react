import { Paragraph, Span } from "./styled";

const Error = ({ status }) => {
  return (
    <Paragraph>
      <Span>
        O nie! Nie udało się.
        <br /><br />({`${status}`})
      </Span>
    </Paragraph>
  );
};

export default Error;
