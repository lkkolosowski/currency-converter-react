const Footer = ({ dateFormat }) => {
  return (
    <span className="footer">
      <span>Kurs walut zaktualizowano </span>
      <span>w dniu </span>
      <span>
        {new Date(2022, 9, 28).toLocaleDateString(dateFormat, { day: "numeric", month: "long", year: "numeric" })}
      </span>
    </span>
  );
};

export default Footer;
