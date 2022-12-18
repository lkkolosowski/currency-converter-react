import styled from "styled-components";

export const FormField = styled.form`
  width: 576px;
  padding: 20px 0;

  @media (max-width: 575px) {
    padding: 0;
  }
`;

export const Fieldset = styled.fieldset`
  margin: 0;
  border: 0;
  padding: 10px 50px;
  border-radius: 10px;
  background-color: rgb(255 255 255 / 90%);
  box-shadow: 0 0 8px 0 rgb(34 34 34 / 20%), 0 0 20px 0 rgb(34 34 34 / 20%);

  @media (max-width: 575px) {
    min-height: 100vh;
    border-radius: 0;
    padding: 10px 20px;
  }
`;

export const Section = styled.section`
  font-family: "Fragment Mono", monospace;
  font-size: 12px;
  color: #555;
  margin-top: 6px;
  margin-bottom: 6px;
  line-height: 1.5;
  text-align: ${({ align }) => align || "left"};
`;

export const PrimarySection = styled.section`
  margin-top: 28px;
  margin-bottom: 28px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #008080;
  margin: 0;
  line-height: 2;

  @media (max-width: 575px) {
    font-size: 24px;
  }
`;

export const Wrapper = styled.div`
  padding: 28px 0;
`;

export const Label = styled.label`
  display: block;
  line-height: 16px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export const Column = styled.div`
  display: flex;
  min-height: 106px;
  margin-top: 28px;
  margin-bottom: 28px;
  align-items: center;
  justify-content: center;

  @media (max-width: 339px) {
    min-height: 242px;
    flex-direction: column;
  }
`;

export const Row = styled.div([]);
