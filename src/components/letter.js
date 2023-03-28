import React from "react";

export default function Letter({ letter, functions, classN }) {
  return (
    <span
      className={classN}
      onClick={() => {
        functions.updateLetterStatus(letter);
        functions.checkScore();
        functions.checkEndGame();
      }}
    >
      {letter}{" "}
    </span>
  );
}
