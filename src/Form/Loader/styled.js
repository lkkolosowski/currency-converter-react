import styled from "styled-components";

export const StyledLoader = styled.div`
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #333;
  width: 24px;
  height: 24px;
  margin: 3px 23px;
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
