import React from "react";

const Timer = ({ isPaused }) => {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  React.useEffect(() => {
    if (isPaused) return;
    setTimeout(() => setSeconds(seconds + 1), 1000);
    if (seconds === 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }
  });

  return (
    <div style={{ fontSize: "20vh", display: "flex" }}>
      {minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:
      {seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
    </div>
  );
};
export default Timer;
