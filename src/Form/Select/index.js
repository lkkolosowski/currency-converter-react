import { currencies } from "../../currencies.js";

const Select = ({ id, value, onChange }) => {

  return (
      <select
        id={id}
        className="form__select"
        value={value}
        onChange={onChange}
      >
        {currencies.map(({ code }) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
  );
};

export default Select;
