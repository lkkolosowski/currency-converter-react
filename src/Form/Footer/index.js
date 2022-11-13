const Footer = ({ dateFormat }) => {
  return (
    <span className="footer">
      <span>Kurs&nbsp;walut&nbsp;zaktualizowano </span>
      <span>w&nbsp;dniu </span>
      <span>
        {new Date(2022, 10, 28)
          .toLocaleDateString(dateFormat, { day: "numeric", month: "long" })
          .split(" ")
          .map((element) => (
            <span key={element}>{element}&nbsp;</span>
          ))}
        {new Date(2022, 10, 28).toLocaleDateString(dateFormat, { year: "numeric" })}
      </span>
    </span>
  );
};

export default Footer;
