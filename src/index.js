import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const RenderApp = () => {
  return (
    <>
      <App />
    </>
  );
};

ReactDOM.render(<RenderApp />, document.getElementById("root"));
