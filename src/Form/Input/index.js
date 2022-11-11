const Input = ({ type, id, disabled, value, onChange, onKeyPress }) => {
  return (
      <input
        type={type}
        id={id}
        min="0"
        disabled={disabled}
        className="form__input"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
  );
};

export default Input;
