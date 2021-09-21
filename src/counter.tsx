import React from "react";

interface Props {
}

interface State {
	counter: number;
}

class Counter extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			counter: 0,
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		this.setState((state) => ({ counter: state.counter + 1 }));
	}

	decrement() {
		this.setState((state) => ({ counter: state.counter - 1 }));
	}

	render() {
		return (
			<div>
				<h1>{this.state.counter}</h1>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</div>
		);
	}
}

export default Counter;
