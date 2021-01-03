import React, { useContext } from "react";
import { createContextAPI } from "../context/ContextAPI";

function GameComponent() {
  const { players, setPlayers } = useContext(createContextAPI);

  const diff =
    players.playerTwo.win > players.playerOne.win
      ? players.playerTwo.win - players.playerOne.win
      : players.playerOne.win - players.playerTwo.win;

  const currentWinner =
    players.playerTwo.win - players.playerOne.win === 0
      ? "Tie!"
      : players.playerTwo.win > players.playerOne.win
      ? players.playerTwo.username
      : players.playerOne.username;

  return (
    <div className="container text-center vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="border w-25 p-3 h-50 col-xs-2">
        <div className="d-flex h-100 flex-column justify-content-around">
          <div className="d-flex justify-content-between w-100">
            <p>{players.playerOne.username}</p>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              data-testid="add-btn"
              onClick={() =>
                setPlayers((prevState) => {
                  return {
                    ...prevState,
                    playerOne: {
                      ...prevState.playerOne,
                      win: players.playerOne.win + 1,
                    },
                  };
                })
              }
            >
              Add Win
            </button>
          </div>

          <div className="text-center d-flex justify-content-around">
            <p>Wins:</p>
            <span data-testid="player-score">{players.playerOne.win}</span>
          </div>

          <div className="d-flex justify-content-between w-100">
            <p>{players.playerTwo.username}</p>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() =>
                setPlayers((prevState) => {
                  return {
                    ...prevState,
                    playerTwo: {
                      ...prevState.playerTwo,
                      win: players.playerTwo.win + 1,
                    },
                  };
                })
              }
            >
              Add Win
            </button>
          </div>

          <div className="text-center d-flex justify-content-around">
            <p>Wins:</p>
            <span>{players.playerTwo.win}</span>
          </div>

          <div className="divider py-1 bg-dark"></div>

          <div className="text-left">
            <span>Current Winner: {currentWinner}</span>
          </div>
          <div className="text-left">
            <span>Win difference: {diff}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameComponent;
