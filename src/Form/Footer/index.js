import "./style.css";

const Footer = ({ date }) => {
  return (
    <div className="footer">
      <p className="footer__paragraph">Kurs zaktualizowano w dniu 28.09.2022</p>
      <p className="footer__paragraph">{date}</p>
    </div>
  );
};

export default Footer;
