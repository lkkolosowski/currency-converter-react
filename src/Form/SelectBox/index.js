import Select from "./Select";
import Flag from "./Flag";
import Caption from "./Caption";
import "./style.css";

const SelectBox = ({ src, id, value, onChange, currencyName }) => {
  return (
    <div className="selectBox">
      <Flag src={src} />
      <Select id={id} value={value} onChange={onChange} />
      <Caption currencyName={currencyName} />
    </div>
  );
};

export default SelectBox;
