import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  outline: none;
  border-radius: 10px;
  border: none;
  height: 50px;
  font-size: 18px;
  padding: 0 15px;
  color: #fff;
  background-color: #008080;
  margin-top: 0;
  margin-bottom: 28px;

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.7;
  }
`;
