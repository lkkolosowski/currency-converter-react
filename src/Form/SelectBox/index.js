import Select from "./Select";
import Flag from "./Flag";
import Caption from "./Caption";
import { Box } from "./styled";

const SelectBox = ({ src, id, value, onChange, currencyName, currencies}) => {
  return (
    <Box>
      <Flag src={src} />
      <Select id={id} value={value} onChange={onChange} currencies={currencies}/>
      <Caption currencyName={currencyName} />
    </Box>
  );
};

export default SelectBox;
