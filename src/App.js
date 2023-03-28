import "./App.css";
import Letters from "./components/letters";
import { useState } from "react";
import Soultion from "./components/soultion";
import Score from "./components/score";
import EndGame from "./components/endGame";
function App() {
  const generateLetterStatuses = function () {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  };
  const [gameData, setGameData] = useState({
    soultion: "FAKEER",
    score: 80,
    letters: generateLetterStatuses(),
    hint: "?*****? lma t2ole hsybek y3ne ana hagree orak ",
    endGame: false,
    winner: false,
  });
  const updateLetterStatus = function (letter) {
    let newGameData = { ...gameData };
    newGameData.letters[letter] = true;
    if (newGameData.soultion.includes(letter)) {
      newGameData.score += 5;
    } else {
      newGameData.score -= 20;
    }
    setGameData(newGameData);
  };
  const checkScore = function () {
    let newGameData = { ...gameData };
    if (newGameData.score <= 0) {
      newGameData.endGame = true;
      setGameData(newGameData);
      return true;
    }
    return false;
  };
  const restart = function () {
    let newGameData = { ...gameData };
    newGameData.soultion = "COLD";
    newGameData.hint = "there is nothing better than  a **** beer";
    newGameData.winner = false;
    newGameData.endGame = false;
    newGameData.score = 80;
    newGameData.letters = generateLetterStatuses();
    setGameData(newGameData);
  };
  const checkEndGame = function () {
    let soultionWord = gameData.soultion;
    let correctLetterCount = 0;
    let newGameData = { ...gameData };
    for (let letter of soultionWord) {
      if (gameData.letters[letter]) {
        correctLetterCount++;
      }
    }
    if (correctLetterCount === soultionWord.length) {
      newGameData.endGame = true;
      newGameData.winner = true;
      setGameData(newGameData);
    }
    return <></>;
  };
  return (
    <div className="App">
      {gameData.endGame ? (
        gameData.winner ? (
          <EndGame text={"congrats fakeer"} restart={restart} />
        ) : (
          <EndGame
            text={"fakeer you losseer the word is " + gameData.soultion}
            restart={restart}
          />
        )
      ) : (
        <div>
          <Score score={gameData.score} />
          <Soultion
            soultionWord={gameData.soultion}
            letters={gameData.letters}
          />
          <Letters
            letters={gameData.letters}
            hint={gameData.hint}
            updateLetterStatus={updateLetterStatus}
            functions={{ checkEndGame, checkScore, updateLetterStatus }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
