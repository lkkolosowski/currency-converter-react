import { SelectField } from "./styled";

const Select = ({ id, value, onChange, currencies }) => {
  return (
    <SelectField id={id} value={value} onChange={onChange}>
      {currencies.map(({ code }) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </SelectField>
  );
};

export default Select;
