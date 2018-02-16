import * as React from 'react';
import './App.css';

// import Counter from './Counter';
import CounterController from './CounterController';
import CounterDisplay from './CounterDisplay';

const logo = require('./logo.svg');

interface AppProps {
  defaultValue: number;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
      super(props);

      this.state = {
          counter: this.props.defaultValue,
      };
    }

    increment = (value: number) => {
        this.setState(previousState => ({
            counter: previousState.counter + value,
        }));
    }

    decrement = (value: number) => {
        this.setState(previousState => ({
            counter: previousState.counter - value,
        }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <CounterController onIncrement={this.increment} onDecrement={this.decrement}/>
                <CounterDisplay counter={this.state.counter}/>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to
                    reload.
                </p>
            </div>
        );
    }
}

export default App;
