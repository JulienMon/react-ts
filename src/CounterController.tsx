import * as React from 'react';

interface CounterControllerProps {
    onDecrement(value: number): void;
    onIncrement(value: number): void;
}

export default class CounterController extends React.Component<CounterControllerProps, object> {
    incrementStep: number = 1;

    render() {
        return (
            <div>
                <button onClick={() => (this.props.onDecrement(this.incrementStep))}>-</button>
                <button onClick={() => (this.props.onIncrement(this.incrementStep))}>+</button>
            </div>
        );
    }
}