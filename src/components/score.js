import React from "react";

export default function Score({ score }) {
  const checkScore = function () {
    if (score >= 80) {
      return "high";
    }
    if (score >= 50 && score < 80) {
      return "medium";
    }
    if (score < 50) {
      return "low";
    }
  };
  return <div className={checkScore()}>{score}</div>;
}
