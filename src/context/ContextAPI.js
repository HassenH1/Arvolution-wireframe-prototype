import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const createContextAPI = createContext();

function ContextAPI(props) {
  const [players, setPlayers] = useState({
    playerOne: {
      username: "",
      win: 0,
    },
    playerTwo: {
      username: "",
      win: 0,
    },
  });

  return (
    <createContextAPI.Provider value={{ players, setPlayers }}>
      {props.children}
    </createContextAPI.Provider>
  );
}

export default ContextAPI;

ContextAPI.propTypes = {
  children: PropTypes.node,
};

// export const AuthContext = createContext();
// ...
// export default AuthContextProvider;

// import AuthContext from "./context/AuthContext";
// So, I was not importing "AuthContext", but the default "AuthContextProvider" instead.
