import { useState } from "react";
import ReactDOM from "react-dom";

export const Panel = ({ url }) => {
  return (
    <div>
      {url &&
        ReactDOM.createPortal(
          <div
            style={{
              top: "0",
              position: "fixed",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              height: "100%",
              color: "#FFF",
            }}
          >
            <img src={url} alt="photo" />
            asdasdasd
          </div>,
          document.querySelector("#portal")
        )}

      <button onClick={() => setShowPanel(!showPanel)}>Alerta</button>
    </div>
  );
};
