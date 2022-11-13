const Clock = () => {
  const myDate = new Date();

  return <span className="date">{myDate.toString()}</span>;
};

export default Clock;
