import * as React from 'react';

interface CounterState {
    counter: number;
}
interface CounterProps {
    defaultValue: number;
}

export default class Counter extends React.Component<CounterProps, CounterState> {

    constructor(props: CounterProps) {
        super(props);
    
        this.state = {
          counter: this.props.defaultValue
        };
      }
    
    increment = () => {
        this.setState((previousState) => ({
            counter: previousState.counter + 1
        }));
    }
    
    render() {
        return (
            <div>
            Counter: {this.state.counter}
            <br/>
            <button onClick={this.increment}>+</button>
            </div>
        );
    }
}