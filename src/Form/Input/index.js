import { InputField } from "./styled";

const Input = ({ autoFocus, type, id, min,step, disabled, value, onChange, onKeyPress }) => {
  return (
    <InputField
      autoFocus={autoFocus}
      type={type}
      id={id}
      min={min}
      step={step}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
