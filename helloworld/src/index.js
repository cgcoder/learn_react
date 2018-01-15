const Board = require('./components.js').Board;
const Counter = require('./counter.js').Counter;
const Clock = require('./clock.js').Clock;

square_data = Array(9).fill('_');

function clickhandler(index) {
  var a = null;
  a.print();
}
/*
ReactDOM.render(
  <Board squares={square_data} onClick={(i) => clickhandler(i)} />,
  document.getElementById('app')
);
*/

function up(obj) {
  alert(obj);
}

function down(obj) {
  alert('down2');
  alert(obj);
}

/*
ReactDOM.render(
  <Counter counterValue="10" className="testCounter" onCountUp={up} onCountDown={down} />,
  document.getElementById('app')
);
*/

ReactDOM.render(
  <Clock />,
  document.getElementById('app')
);
