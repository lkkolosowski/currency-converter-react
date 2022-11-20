import { Button } from "./styled";

const SubmitButton = ({ onClick, content }) => {
  return (
    <Button onClick={onClick}>
      {content}
    </Button>
  );
};

export default SubmitButton;
