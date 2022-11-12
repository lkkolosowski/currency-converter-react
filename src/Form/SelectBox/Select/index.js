import { currencies } from "../../../currencies.js";
import "./style.css";

const Select = ({ id, value, onChange }) => {
  return (
    <select id={id} className="select" value={value} onChange={onChange}>
      {currencies.map(({ code }) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
};

export default Select;
