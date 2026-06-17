import React, { Component } from "react";

/**
 * Code 02 — Counter component (converted from JavaScript to TypeScript)
 *
 * Conversion steps (JS -> TS):
 * 1) Rename the file from `.js` to `.tsx`.
 * 2) Define `CounterState` so `count` is typed as a number.
 * 3) Define `CounterProps` (empty here because this component takes no props).
 * 4) Extend `Component<CounterProps, CounterState>` to type props and state.
 * 5) Type the `state` property and keep `return (` on the same line.
 */
export type CounterState = {
  count: number;
};

export type CounterProps = Record<string, never>;

class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
