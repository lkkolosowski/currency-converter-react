import { currencies } from "../../../currencies.js";
import { SelectField, Option } from "./styled";

const Select = ({ id, value, onChange }) => {
  return (
    <SelectField id={id} value={value} onChange={onChange}>
      {currencies.map(({ code }) => (
        <Option key={code} value={code}>
          {code}
        </Option>
      ))}
    </SelectField>
  );
};

export default Select;
