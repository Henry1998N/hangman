import React from "react";
import Letter from "./letter";

export default function Soultion({ soultionWord, letters }) {
  const displayUndeScores = function () {
    let result = [];
    for (let letter of soultionWord) {
      result.push(<Letter letter={letters[letter] == true ? letter : "_"} />);
    }
    return result;
  };
  return <div>{displayUndeScores()}</div>;
}
