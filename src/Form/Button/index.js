import { Pushbutton } from "./styled";

const Button = ({ onClick, content }) => {
  return (
    <Pushbutton onClick={onClick}>
      {content}
    </Pushbutton>
  );
};

export default Button;
