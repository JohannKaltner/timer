import React from "react";

const Counter = ({ counter, player }) => {
  React.useEffect(() => {}, [counter]);
  const zeroPad = (num, places) => String(num).padStart(places, "0");

  return (
    <React.Fragment>
      <div style={{ height: "100%", display: "flex" }}>
        <span
          style={{
            height: "100%",
            padding: "5px",
            backgroundColor: player === 2 ? "white" : "green",
            color: player === 2 ? "black" : "#f8f9bf",
            fontSize: "26vh",
          }}
        >
          {zeroPad(counter, 2)}
        </span>
        <span
          style={{
            eight: "auto",
            padding: "5px",
            backgroundColor: "#e07010",
            color: "#3c3636",
            fontSize: "23vh",
          }}
        >
          0
        </span>
        <span
          style={{
            eight: "auto",
            padding: "5px",
            backgroundColor: "#e6d76b",
            color: "#3c3636",
            fontSize: "23vh",
          }}
        >
          {zeroPad(0, 2)}
        </span>
      </div>
    </React.Fragment>
  );
};
export default Counter;
