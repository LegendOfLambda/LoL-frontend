import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import World from "./components/world";
import PlayerInformation from "./components/player-info";
import { LandingPage, Game } from "./pages/index";

const App: React.SFC<{}> = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/play-now" component={Game} />
      </div>
    </Router>
  );
};

export default App;
