import styled from "styled-components";
import { ReactComponent as Exchange } from "./exchange.svg";

export const Button = styled.a`
  cursor: pointer;
  display: block;
  text-align: center;
  line-height: 30px;
  background: transparent;
  border: 0;
  margin: 0 20px;
  padding: 0;
  height: 30px;
  width: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`;

export const ExchangeIcon = styled(Exchange)`
  width: auto;
  height: 18px;
  margin-top: 6px;
`;
