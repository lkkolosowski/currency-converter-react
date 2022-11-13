import "./style.css";

const Footer = ({ clock }) => {
  return (
    <div className="footer">
      <p className="footer__paragraph">
        <span>Kurs&nbsp;walut&nbsp;zaktualizowano </span>
        <span>w&nbsp;dniu 28&nbsp;października&nbsp;2022</span>
      </p>
      {clock}
    </div>
  );
};

export default Footer;
