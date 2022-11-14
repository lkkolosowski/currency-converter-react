import "./style.css";

const Footer = ({ dateFormat }) => {
  return (
    <p className="footer">
      <span>Kurs walut zaktualizowano </span>
      <span>w dniu </span>
      <span>
        {new Date(2022, 9, 28).toLocaleDateString(dateFormat, { day: "numeric", month: "long", year: "numeric" })}
      </span>
    </p>
  );
};

export default Footer;
