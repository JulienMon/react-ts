import * as React from 'react';

interface CounterDisplayProps {
    counter: number;
}

export default class CounterDisplay extends React.Component<CounterDisplayProps, object> {

    render() {
        return (
            <div>
                Counter: {this.props.counter}
            </div>
        );
    }
}