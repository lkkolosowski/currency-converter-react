import { Paragraph, Day } from "./styled";

const Footer = ({ currenciesData, dateFormat }) => {
  return (
    <Paragraph>
      <span>Kurs walut zaktualizowano </span>
      <span>w dniu </span>
      <Day>
        {currenciesData.status === "success"
          ? new Date(currenciesData.date.replaceAll("-", ", ")).toLocaleDateString(dateFormat, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "..."}
      </Day>
    </Paragraph>
  );
};

export default Footer;
