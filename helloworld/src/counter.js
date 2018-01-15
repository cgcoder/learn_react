"use strict";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.onCountUp = this.onCountUp.bind(this);
    this.onCountDown = this.onCountDown.bind(this);
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.counterValue}
        <button onClick={this.onCountUp}>+</button>
        <button onClick={this.onCountDown}>-</button>
      </div>
    )
  }

  onCountUp() {
    alert(this.props);
    if (this.props.onCountUp) {
      this.props.onCountUp(this);
    }
  }

  onCountDown() {
    alert('down');
    if (this.props.onCountDown) {
      this.props.onCountDown(this);
    }
  }
}

exports.Counter = Counter;
