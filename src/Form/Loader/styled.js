import styled from "styled-components";

export const StyledLoader = styled.div`
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #333;
  width: 16px;
  height: 16px;
  -webkit-animation: spin 0.5s linear infinite; /* Safari */
  animation: spin 0.5s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
