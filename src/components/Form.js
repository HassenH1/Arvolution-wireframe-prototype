import React, { useState, useContext } from "react";
import { createContextAPI } from "../context/ContextAPI";
// import { ContextAPI } from "../context/ContextAPI";
import { withRouter, useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();
  const { players, setPlayers } = useContext(createContextAPI);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      players.playerOne.username === "" ||
      players.playerTwo.username === ""
    ) {
      setError("Both Names cannot be empty!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else {
      history.push("/game");
    }
  };

  return (
    <div className="container text-center vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="border min-w-25 p-4 h-50">
        <form className="d-flex h-100 flex-column justify-content-around">
          <div className="form-group text-left col-xs-2">
            <label htmlFor="player1" data-testid="player-one-label">
              Player 1 Name
            </label>
            <input
              type="text"
              className="form-control"
              data-testid="required-input-playerOne"
              value={players.playerOne.username}
              onChange={(e) =>
                setPlayers((prevState) => {
                  return {
                    ...prevState,
                    playerOne: {
                      ...prevState.playerOne,
                      username: e.target.value,
                    },
                  };
                })
              }
            />
          </div>

          <div className="form-group text-left col-xs-2">
            <label htmlFor="player2">Player 2 Name</label>
            <input
              type="text"
              className="form-control"
              value={players.playerTwo.username}
              onChange={(e) =>
                setPlayers((prevState) => {
                  return {
                    ...prevState,
                    playerTwo: {
                      ...prevState.playerTwo,
                      username: e.target.value,
                    },
                  };
                })
              }
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={error ? true : false}
            data-testid="continue-btn"
          >
            Continue
          </button>
        </form>
        <div
          style={{
            textAlign: "center",
            color: "red",
            margin: "0",
            padding: "0",
            fontSize: "12px",
          }}
        >
          {error}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Form);
