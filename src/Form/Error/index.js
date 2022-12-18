import { StyledError } from "./styled";

const Error = () => {
  return (
    <StyledError>
      <div>
        Nie udało się pobrać danych. <br />
        Sprawdź połączenie z internetem
      </div>
    </StyledError>
  );
};

export default Error;
