import React from "react";
import "./App.scss";

import Main from "./components/main";
import Player from "./components/Player";

const App: React.FC = () => {
  return (
    <div className="App">
      <Main />
      <Player />
    </div>
  );
};

export default App;
