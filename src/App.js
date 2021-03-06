import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { AddStock } from './components/addStock/AddStock'
import { DisplayStock } from './components/displayStock/DisplayStock'

export default function App() {
  const initialData = GET_ITEMS_FROM_LOCAL_STORAGE() || []
  const [stockList, setStockList] = useState(initialData)

  //user add new stock
  const addStock = (ticker) => {
    const newData = [...stockList, ticker]

    setStockList(newData)
    SAVE_DATA_TO_LOCAL_STORAGE(newData)
  }

  //delete single stock
  const deleteStock = (ticker) => {
    const updateStockList = stockList.filter((i) => i != ticker.toLowerCase())
    setStockList(updateStockList)
    SAVE_DATA_TO_LOCAL_STORAGE(updateStockList)
  }

  //delete watch list
  const resetStockList = () => {
    setStockList([])
    SAVE_DATA_TO_LOCAL_STORAGE(stockList)
  }

  return (
    <div className='app'>
      <div>
        <h3>Jack Dang's Watch List</h3>
        <AddStock addStock={addStock} resetStockList={resetStockList} />
      </div>
      <DisplayStock stockList={stockList} deleteStock={deleteStock} />
    </div>
  )
}

//Save data to localStorage
const SAVE_DATA_TO_LOCAL_STORAGE = (newState) => {
  localStorage.setItem('stockList', JSON.stringify(newState))
}
//Get data from localStorage
const GET_ITEMS_FROM_LOCAL_STORAGE = () => {
  return JSON.parse(localStorage.getItem('stockList'))
}
