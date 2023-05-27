import { Button, ExchangeIcon } from "./styled";

const SwapButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <ExchangeIcon />
    </Button>
  );
};

export default SwapButton;
