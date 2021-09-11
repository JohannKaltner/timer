import React, { useEffect } from "react";

import "./App.css";
import Timer from "./components/timer";
import Counter from "./components/counter";
import Image from "./new.png";
import Image2 from "./ibjjf.png";

function App() {
  const [counter, setCounter] = React.useState(0);
  const [reset, setReset] = React.useState(false);
  const [primary, setPrimary] = React.useState(false);
  useEffect(() => {
    const onKeyDown = (e) => {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 32:
          if (counter === 4) return;
          setCounter(counter + 2);
          break;
        case 82:
          setCounter(0);
          break;
        case 83:
          setPrimary(!primary);
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
  }, [counter, reset, primary]);
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
            <Timer reset={reset} callbackReset={() => setReset(false)} />
          </div>
          <div
            style={{
              width: "100% ",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              alt="logo"
              src={primary ? Image : Image2}
              width="200px"
              height="200px"
            />
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
