import "./style.css";

const Button = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <i className="fas fa-exchange-alt"></i>
    </button>
  );
};

export default Button;
