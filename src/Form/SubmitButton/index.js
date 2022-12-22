import { Button } from "./styled";

const SubmitButton = ({ content, disabled }) => {
  return <Button disabled={disabled}>{content}</Button>;
};

export default SubmitButton;
