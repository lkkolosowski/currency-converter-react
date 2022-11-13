import "./style.css";

const Clock = () => {
  const newDate = new Date();

  return (
    <p className="clock">
      <span>
        Dzisiaj&nbsp;jest&nbsp;
        {newDate.toLocaleDateString(undefined, { weekday: "long" })}
        {", "}
      </span>
      <span>
        {newDate
          .toLocaleDateString(undefined, { day: "numeric", month: "long" })
          .split(" ")
          .map((element) => (
            <span>{element}&nbsp;</span>
          ))}
        {newDate.toLocaleDateString(undefined, { year: "numeric" })}
        {", "}
      </span>
      <span>{newDate.toLocaleTimeString()}</span>
    </p>
  );
};

export default Clock;
