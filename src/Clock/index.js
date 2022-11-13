import { useState, useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <span className="clock">
      <span>
        Dzisiaj&nbsp;jest&nbsp;
        {date.toLocaleDateString(undefined, { weekday: "long" })}
        {", "}
      </span>
      <span>
        {date
          .toLocaleDateString(undefined, { day: "numeric", month: "long" })
          .split(" ")
          .map((element) => (
            <span key={element}>{element}&nbsp;</span>
          ))}
        {date.toLocaleDateString(undefined, { year: "numeric" })}
        {", "}
      </span>
      <span>{date.toLocaleTimeString()}</span>
    </span>
  );
};

export default Clock;
