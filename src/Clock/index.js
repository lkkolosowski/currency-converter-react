import { Paragraph, Span } from "./styled";
import { useState, useEffect } from "react";

const Clock = ({ dateFormat }) => {
  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
