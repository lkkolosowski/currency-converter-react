import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:
    "flag select"
    "caption caption";
  width: 115px;
  height: 50px;
  padding: 1px;
  margin-bottom: 28px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #888;

  &:focus-within {
    padding: 0;
    border: 2px solid #222;
  }
`;
