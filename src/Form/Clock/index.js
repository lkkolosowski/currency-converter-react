import { useCurrentDate } from "./useCurrentDate";
import { Paragraph } from "./styled";

const Clock = ({ dateFormat }) => {
  const newDate = useCurrentDate();

  return (
    <Paragraph className="clock">
      <span>
        Dzisiaj jest {newDate.toLocaleDateString(dateFormat, { weekday: "long" })}
        {","}
      </span>
      <span>
        {newDate.toLocaleDateString(dateFormat, { day: "numeric", month: "long", year: "numeric" })}
        {","}
      </span>
      <span>{newDate.toLocaleTimeString()}</span>
    </Paragraph>
  );
};

export default Clock;
