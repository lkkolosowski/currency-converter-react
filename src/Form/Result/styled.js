import styled, { css } from "styled-components";

export const StyledResult = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 50px;
  font-size: 20px;
  padding: 0 15px;
  border-radius: 10px;
  color: #155724;
  background-color: #d4edda;
  border: 1px solid;
  border-color: #c3e6cb;
  font-weight: 700;

  ${({ isLoading }) =>
    isLoading &&
    css`
      border: 1px solid #e5e5e5;
      background: linear-gradient(
        120deg,
        #f0f2f3 30%,
        #fdfdfd 38%,
        #fdfdfd 40%,
        #f0f2f3 48%
      );
      background-size: 200% 100%;
      background-position: 100% 0;

      animation: skeleton-loading 1.2s linear infinite;
    `};

  ${({ isFailure }) =>
    isFailure &&
    css`
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    `};

  @keyframes skeleton-loading {
    100% {
      background-position: -100% 0;
    }
  }
`;
