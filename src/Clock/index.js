import { useCurrentDate } from "./useCurrentDate";
import { Paragraph, Span } from "./styled";

const Clock = ({ dateFormat }) => {
  const newDate = useCurrentDate();

  return (
    <Paragraph className="clock">
      <Span>
        Dzisiaj jest {newDate.toLocaleDateString(dateFormat, { weekday: "long" })}
        {","}
      </Span>
      <Span>
        {newDate.toLocaleDateString(dateFormat, { day: "numeric", month: "long", year: "numeric" })}
        {","}
      </Span>
      <Span>{newDate.toLocaleTimeString()}</Span>
    </Paragraph>
  );
};

export default Clock;
