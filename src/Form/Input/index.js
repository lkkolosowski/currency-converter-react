const Input = ({ type, id, min, disabled, value, onChange, onKeyPress }) => {
  return (
      <input
        type={type}
        id={id}
        min={min}
        disabled={disabled}
        className="form__input"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
  );
};

export default Input;
