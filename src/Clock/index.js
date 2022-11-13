import { useState, useEffect } from "react";

const Clock = () => {
  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const dateFormat = undefined;

  return (
    <span className="clock">
      <span>
        Dzisiaj&nbsp;jest&nbsp;
        {newDate.toLocaleDateString(dateFormat, { weekday: "long" })}
        {", "}
      </span>
      <span>
        {newDate
          .toLocaleDateString(dateFormat, { day: "numeric", month: "long" })
          .split(" ")
          .map((element) => (
            <span key={element}>{element}&nbsp;</span>
          ))}
        {newDate.toLocaleDateString(dateFormat, { year: "numeric" })}
        {", "}
      </span>
      <span>{newDate.toLocaleTimeString()}</span>
    </span>
  );
};

export default Clock;
