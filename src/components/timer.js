// import React, { useRef } from "react";

// const initialState = { seconds: 0, minutes: 0 };
// const Timer = ({ isPaused, reset, callbackReset }) => {
//   const [time, setTime] = React.useState(initialState);
//   const timer = useRef(null);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   React.useEffect(() => {
//     timer.current = setInterval(
//       () => setTime({ ...time, seconds: time.seconds + 1 }),
//       1000
//     );

//     if (isPaused) return;
//     if (reset) return;
//     return () => {
//       clearInterval(timer.current);
//     };
//   });
//   if (time.seconds === 60) {
//     setTime({ minutes: time.minutes + 1, seconds: 0 });
//   }

//   React.useEffect(() => {
//     if (reset) {
//       setTime(initialState);
//       callbackReset();
//       return;
//     }
//   }, [reset]);

//   return (
//     <div style={{ fontSize: "20vh", display: "flex" }}>
//       {time.minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:
//       {time.seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
//     </div>
//   );
// };
// export default Timer;
import React, { useState, useEffect, useRef } from "react";

const STATUS = {
  STARTED: "Started",
};

export default function Timer() {
  const initialState = { seconds: 0, minutes: 0 };
  const [time, setTime] = React.useState(initialState);
  const [status, setStatus] = useState(STATUS.STARTED);
  const [isPaused, setPause] = React.useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      switch (e.keyCode) {
        case 80:
          handlePause();
          break;
        case 82:
          handleStop();
          break;
        default:
          return;
      }
    };
    document.addEventListener("keydown", onKeyDown);
    // document.addEventListener("keyup", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // document.removeEventListener("keyup", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const handleStop = () => {
    setTime(initialState);
  };
  const handlePause = () => {
    setPause(!isPaused);
    setStatus(status);
  };

  useInterval(
    () => {
      if (time.seconds === 60) {
        setTime({ minutes: time.minutes + 1, seconds: 0 });
        return;
      }
      if (isPaused) return;
      setTime({ ...time, seconds: time.seconds + 1 });
    },
    status === STATUS.STARTED ? 1000 : null
  );
  return (
    <div style={{ fontSize: "20vh", display: "flex" }}>
      {time.minutes.toLocaleString(undefined, { minimumIntegerDigits: 2 })}:
      {time.seconds.toLocaleString(undefined, { minimumIntegerDigits: 2 })}
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      setInterval(tick, delay);
    }
  }, [delay]);
}
