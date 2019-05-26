import React from "react";
import './App.css';
import Timer from './components/timer/Timer';

const INITIAL_COUNTERS = {
  initCounters: [0, 10, 20, 30, 40],
};

type AppState = {
  initCounters: number[],
};

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = INITIAL_COUNTERS;
  }

  renderCounters = () => {
    return this.state.initCounters.map((cnt, i) => 
      (<Timer key={i} initCounter={cnt}></Timer>));
  }

  resetCounters =() => {
    this.setState({ ...INITIAL_COUNTERS });
  }

  render() {
    return (
      <div className="App">
        {this.renderCounters()}
        <div>
          <button onClick={this.resetCounters}>
            Reset timers
          </button>
        </div>
      </div>
    )
  }
}

export default App;