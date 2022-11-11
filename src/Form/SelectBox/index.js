import Select from "./Select";
import Flag from "./Flag";
import Caption from "./Caption";

const SelectBox = ({ src, id, value, onChange, currencyName }) => {
  return (
    <div className="form__select-box">
      <Flag src={src} />
      <Select id={id} value={value} onChange={onChange} />
      <Caption currencyName={currencyName} />
    </div>
  );
};

export default SelectBox;
