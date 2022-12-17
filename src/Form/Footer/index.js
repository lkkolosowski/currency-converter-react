import { Paragraph, Day} from "./styled";

const Footer = ({ currenciesDay, dateFormat }) => {
  return (
    <Paragraph>
      <span>Kurs walut zaktualizowano </span>
      <span>w dniu </span>
      <Day>
        {new Date(currenciesDay.replaceAll("-", ", ")).toLocaleDateString(dateFormat, { day: "numeric", month: "long", year: "numeric" })}
      </Day>
    </Paragraph>
  );
};

export default Footer;
