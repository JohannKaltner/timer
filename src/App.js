import React, { useEffect } from "react";

import "./App.css";
import Timer from "./components/timer";
import Counter from "./components/counter";
import Image from "./ibjjf.png";
function App() {
  const [isPaused, setPause] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [reset, setReset] = React.useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 32:
          setCounter(counter + 2);
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
  }, [isPaused, counter, reset]);
  return (
    <div
      style={{
        height: "100vh",
        alignItems: "center",
        justifyContent: " center",
        display: " flex",
      }}
    >
      <div style={{ width: "65%", display: "flex" }}>
        <div
          style={{
            width: "100%",
            flexDirection: "column",
            paddingTop: 100,
            marginRight: 20,
          }}
        >
          <div style={{ width: "100%", display: "flex" }}>
            <Timer
              isPaused={isPaused}
              reset={reset}
              callbackReset={() => setReset(false)}
            />
          </div>
          <div
            style={{
              width: "100% ",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img alt="logo" src={Image} width="200px" height="200px" />
          </div>
        </div>

        <div
          style={{
            width: "100%",
            flexDirection: "column",
            height: "auto",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <Counter counter={counter} player={1} />
          </div>
          <div style={{ width: "100%", display: "flex" }}>
            <Counter counter={0} player={2} />
          </div>
        </div>
        {/* <Counter counter={0} /> */}
      </div>
    </div>
  );
}

export default App;
