import styled, { css } from "styled-components";

export const StyledResult = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  height: 50px;
  background-color: #e8f3ee;
  font-size: 22px;
  padding: 0 15px;
  border-radius: 10px;
  border: 1px solid #d3e8df;
  color: rgba(25, 135, 84, 1);
  font-weight: 700;

  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid #e5e5e5;
      background: linear-gradient(
        120deg,
        #e5e5e5 30%,
        #f0f0f0 38%,
        #f0f0f0 40%,
        #e5e5e5 48%
      );
      background-size: 200% 100%;
      background-position: 100% 0;

      animation: skeleton-loading 1.2s linear infinite;
    `};

  @keyframes skeleton-loading {
    100% {
      background-position: -100% 0;
    }
  }
`;
