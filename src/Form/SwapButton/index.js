import { Button } from "./styled";

const SwapButton = ({ onClick, content }) => {
  return (
    <Button onClick={onClick}>
      {content}
    </Button>
  );
};

export default SwapButton;
