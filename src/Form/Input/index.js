import { InputField } from "./styled";

const Input = ({ autoFocus, type, id, min, disabled, value, onChange, onKeyPress }) => {
  return (
    <InputField
      autoFocus={autoFocus}
      type={type}
      id={id}
      min={min}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
