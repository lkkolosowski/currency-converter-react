import styled from "styled-components";

export const Button = styled.a`
  cursor: pointer;
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  background: transparent;
  border: 0;
  margin: 0 20px;
  padding: 0;
  height: 30px;
  width: 30px;

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.7;
  }
`;
