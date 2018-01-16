"use strict";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.onCountUp = this.onCountUp.bind(this);
    this.onCountDown = this.onCountDown.bind(this);
    this.state = {
      counterValue: props.counterValue
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.state.counterValue}
        <button onClick={this.onCountUp}>+</button>
        <button onClick={this.onCountDown}>-</button>
      </div>
    )
  }

  componentDidMount() {
    console.log('did mount');
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
  }

  onCountUp() {
    this.setState({counterValue: parseInt(this.state.counterValue) + 1});
  }

  onCountDown() {
    this.setState({counterValue: parseInt(this.state.counterValue) - 1});
  }
}

exports.Counter = Counter;
