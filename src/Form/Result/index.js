import { StyledResult } from "./styled";

const Result = ({ content, disabled }) => {
  return <StyledResult disabled={disabled}>{content}</StyledResult>;
};

export default Result;
