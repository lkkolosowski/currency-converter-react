import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  outline: none;
  border-radius: 10px;
  height: 50px;
  font-size: 18px;
  padding: 0 15px;
  border: 1px solid #888;

  &:disabled {
    background-color: #f0f2f4;
  }

  &:focus {
    padding: 0 14px;
    border: 2px solid #222;
  }
`;
