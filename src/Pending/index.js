import { Paragraph, Span } from "./styled";

const Pending = ({ status }) => {
  return (
    <Paragraph>
      <Span>
        Czekaj ...
        <br />
        <br />({`${status}`})
      </Span>
    </Paragraph>
  );
};

export default Pending;
