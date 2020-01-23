import React from "react";
import { RouteComponentProps } from "react-router-dom";

import World from "../components/world";
import PlayerInformation from "../components/player-info";

function Game() {
  return (
    <div className="game">
      <World tiles={[]} />
      <PlayerInformation
        geo={{
          position: [],
          spriteLocation: "",
          direction: "",
          walkIndex: 0,
          level: 0
        }}
        player={{
          name: "",
          hp: 5,
          str: 10,
          def: 10,
          stamina: 10
        }}
        inventory={{
          gems: 0,
          max_slots: 6
        }}
      />
    </div>
  );
}

export default Game;
