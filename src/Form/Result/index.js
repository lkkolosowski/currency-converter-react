import { StyledResult } from "./styled";

const Result = ({ result, status, isLoading, isFailure }) => {
  return (
    <StyledResult isLoading={isLoading} isFailure={isFailure}>
      {`${
        status === "pending"
          ? ""
          : status === "success" && result
          ? `${result.sourceAmount} ${result.sourceCode} = ${result.targetAmount} ${result.targetCode}`
          : "––"
      }`}
    </StyledResult>
  );
};

export default Result;
