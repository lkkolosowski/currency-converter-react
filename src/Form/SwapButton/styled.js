import styled from "styled-components";

export const Button = styled.a`
  cursor: pointer;
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  margin-top: 6px;
  margin-bottom: 6px;
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;
  height: 30px;
  width: 70px;

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.7;
  }
`;
