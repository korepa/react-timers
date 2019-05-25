import React from "react";
import './App.css';
import Timer from './components/timer/Timer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Timer initCounter={0}></Timer>
      <Timer initCounter={10}></Timer>
      <Timer initCounter={20}></Timer>
      <Timer initCounter={30}></Timer>
      <Timer initCounter={40}></Timer>
      <div>
        <button>Reset timers</button>
      </div>
    </div>
  );
}

export default App;
