import React, { Component } from "react";
import "../../styles/apps/calculator.scss";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "0",
      newValue: "",
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      functions: [
        { func: "plus", symbol: "+" },
        { func: "subtract", symbol: "-" },
        { func: "multiply", symbol: "*" },
        { func: "divide", symbol: "/" },
        { func: "equal", symbol: "=" },
        { func: "period", symbol: "." },
      ],
    };

    this.displayValue = this.displayValue.bind(this);
  }

  displayValue = (event) => {
    const newVal = this.state.newValue.concat(event.target.value);
    this.setState({ newValue: newVal });
    this.setState({ value: `${newVal}` });
  };

  addFunction = (event) => {
    let currentVal = this.state.value;

    //console.log(event.target.value);
    if (event.target.value === "=") {
      console.log("yes");
    } else {
      console.log("current val:" + currentVal);
      const evalVal = this.state.newValue.concat(event.target.value);
      console.log(evalVal);
      this.setState({ newValue: evalVal });
    }
  };

  render() {
    return (
      <div className="calculator">
        <Display result={this.state.value} />
        {this.state.numbers.map((num) => (
          <div key={num} className={`num-${num}`}>
            <button
              value={num}
              className={`num-${num}`}
              onClick={this.displayValue}
            >
              {num}
            </button>
          </div>
        ))}

        {this.state.functions.map((functions) => (
          <div key={functions.func} className={`func-${functions.func}`}>
            <button
              value={functions.symbol}
              key={functions.func}
              onClick={this.addFunction}
            >
              {functions.symbol}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

class Display extends React.Component {
  render() {
    return (
      <div className="result">
        <div>
          <h2>{this.props.result}</h2>
        </div>
      </div>
    );
  }
}

export default Calculator;
