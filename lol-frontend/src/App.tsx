import React from 'react';
import './App.scss';
import World from './components/world';
import PlayerInformation from './components/player-info';

const App: React.SFC<{}> = () => {
  return (
    <div className="App">
      <World tiles={[]}/>
      <PlayerInformation
        geo={{
          position: [],
          spriteLocation: '',
          direction: '',
          walkIndex: 0,
          level: 0
        }}
        player={{
          name: '',
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

export default App;
