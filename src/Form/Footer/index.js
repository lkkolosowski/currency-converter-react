import { Paragraph, Span} from "./styled";

const Footer = ({ dateFormat }) => {
  return (
    <Paragraph>
      <Span>Kurs walut zaktualizowano </Span>
      <Span>w dniu </Span>
      <Span>
        {new Date(2022, 9, 28).toLocaleDateString(dateFormat, { day: "numeric", month: "long", year: "numeric" })}
      </Span>
    </Paragraph>
  );
};

export default Footer;
