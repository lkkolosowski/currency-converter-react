const Button = ({ onClick }) => {
  return (
    <button className="form__exchange" onClick={onClick}>
      <i className="form__exchange-icon fas fa-exchange-alt"></i>
    </button>
  );
};

export default Button;
