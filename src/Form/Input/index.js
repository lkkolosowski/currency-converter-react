import "./style.css";

const Input = ({ autoFocus, type, id, min, disabled, value, onChange, onKeyPress }) => {
  return (
    <input
      autoFocus={autoFocus}
      type={type}
      id={id}
      min={min}
      disabled={disabled}
      className="input"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
