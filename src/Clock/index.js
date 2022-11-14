import "./style.css";

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
    <span className="clock">
      <span>
        Dzisiaj jest {newDate.toLocaleDateString(dateFormat, { weekday: "long" })}
        {","}
      </span>
      <span>
        {newDate.toLocaleDateString(dateFormat, { day: "numeric", month: "long", year: "numeric" })}
        {","}
      </span>
      <span>{newDate.toLocaleTimeString()}</span>
    </span>
  );
};

export default Clock;
