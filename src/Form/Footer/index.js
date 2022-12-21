import { Paragraph, Day } from "./styled";

const Footer = ({ status, date, dateFormat }) => {
  return (
    <Paragraph>
      <span>Kurs walut zaktualizowano </span>
      <span>w dniu </span>
      <Day>
        {status === "success"
          ? new Date(date.replaceAll("-", ", ")).toLocaleDateString(dateFormat, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : status === "error"
          ? `<błąd>`
          : `...`}
      </Day>
    </Paragraph>
  );
};

export default Footer;
