import React from "react";
import Letter from "./letter";

export default function Letters({
  letters,
  hint,

  functions,
}) {
  console.log(functions);
  const displayLetters = function () {
    let result = [];
    let lettersObjectKeys = Object.keys(letters);
    for (let letter of lettersObjectKeys) {
      result.push(
        <Letter
          letter={letter}
          classN={letters[letter] ? "lineThrough" : "origi"}
          functions={functions}
        />
      );
    }
    return result;
  };

  return (
    <div>
      <div>{hint}</div>
      <div>Available Letters</div>
      {displayLetters()}
    </div>
  );
}
