import { Paragraph } from "./styled";

const Caption = ({ currencyName }) => {
  return <Paragraph>{currencyName ? currencyName : ""}</Paragraph>;
};

export default Caption;
