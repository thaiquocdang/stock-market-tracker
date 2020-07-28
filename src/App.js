import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StockRow } from './components/StockRow'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-5 mt-5">
          <div className="card">
            <ul className="list-group list-group-flush">
              <StockRow ticker="AAPL" />
              <StockRow ticker="goog" />
              <StockRow ticker="tsla" />
              <StockRow ticker="msft" />
              <StockRow ticker="amzn" />
              <StockRow ticker="bac" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;