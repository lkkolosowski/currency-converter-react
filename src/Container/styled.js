import styled from "styled-components";
import background from "../background.jpg";

export const Main = styled.main`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: center;

  @media (max-width: 575px) {
    background-position: top;
    background-size: auto;
  }
`;
