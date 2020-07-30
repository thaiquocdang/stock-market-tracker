import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StockRow } from './components/StockRow'
import './App.css'
import { AddStock } from './components/AddStock';
import { DisplayStock } from './components/DisplayStock'

function App() {
  // tao ra state moi ten la: stockList -> [ ticket.... ]
  const [stockList, setStockList] = useState(['aapl', 'amzn'])
  // onsubmit AddStock, run function update state stockList.
  // truyen stockList to DisplayStock.

 const addStock = (ticker) => {
   console.log('nhan bien ticket', ticker);
   setStockList([...stockList, ticker])
 }

 const deleteStock = (ticker)=>{
  console.log('delete ticket', ticker);
  const updateStockList = stockList.filter(i => i!=ticker.toLowerCase());
  console.log(updateStockList);
  setStockList(updateStockList)

 }
  return (
    <div className="App">
      <h3>Jack Dang's Watch List</h3>
      <AddStock onSubmit={addStock}/>
      <DisplayStock stockList = {stockList} deleteStock={deleteStock}/>
    </div>
  );
}

export default App;