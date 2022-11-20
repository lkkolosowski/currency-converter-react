import { FormField, Fieldset, Section, PrimarySection, Title, Wrapper, Label, Column, Row } from "./styled";

const Form = ({
  onSubmit,
  amountInput,
  sourceCurrencySelectBox,
  swapButton,
  targetCurrencySelectBox,
  resultInput,
  submitButton,
  clock,
  footer,
}) => {
  return (
    <FormField onSubmit={onSubmit}>
      <Fieldset>
        <Section as="header" align="right">
          {clock}
        </Section>
        <PrimarySection>
          <Title>Konwerter walutowy</Title>
          <Wrapper className="form__wrapper">
            <Label htmlFor="amount">Wprowadź ilość</Label>
            {amountInput}
            <Column>
              <Row>
                <Label htmlFor="source-currency">Przelicz z</Label>
                {sourceCurrencySelectBox}
              </Row>
              <Row>{swapButton}</Row>
              <Row>
                <Label htmlFor="target-currency">Przelicz na</Label>
                {targetCurrencySelectBox}
              </Row>
            </Column>
            {submitButton}
            <Label htmlFor="result">Kurs wymiany</Label>
            {resultInput}
          </Wrapper>
        </PrimarySection>
        <Section as="footer">{footer}</Section>
      </Fieldset>
    </FormField>
  );
};

export default Form;
