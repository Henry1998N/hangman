import React from "react";

export default function EndGame({ text, restart }) {
  return (
    <div>
      <div>{text}</div>
      <button
        onClick={() => {
          restart();
        }}
      >
        Restart
      </button>
    </div>
  );
}
