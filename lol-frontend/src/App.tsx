import React from 'react';
import './App.scss';
import World from './components/world';

const App: React.SFC<{}> = () => {
  return (
    <div className="App">
      <World tiles={[]}/>
    </div>
  );
}

export default App;
