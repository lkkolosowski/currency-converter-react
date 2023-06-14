import { Paragraph, Day } from "./styled";

const Footer = ({ status, date, dateFormat }) => {
  return (
    <Paragraph>
      {status === "success" ? (
        <>
          <span>Kurs walut zaktualizowano </span>
          <span>w dniu </span>
          <Day>
            {new Date(date.replaceAll("-", ", ")).toLocaleDateString(
              dateFormat,
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </Day>
        </>
      ) : (
        ""
      )}
    </Paragraph>
  );
};

export default Footer;
