const Board = require('./components.js').Board;

square_data = Array(9).fill('_');
ReactDOM.render(
  <Board squares={square_data} onClick={(i) => alert(i)} />,
  document.getElementById('app')
);
