import { Paragraph, Span } from "./styled";

const Error = () => {
  return (
    <Paragraph>
      <Span>
        O nie! nie udało się.
        <br />
        (error)
      </Span>
    </Paragraph>
  );
};

export default Error;
