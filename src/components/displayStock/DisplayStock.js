import React from 'react'
import { StockRow } from '../stockRow/StockRow'

export const DisplayStock = (props) => {
  const stockList = props.stockList
  const deleteStock = props.deleteStock
  return (
    <div className='stock-board'>
      {stockList.map((ticker) => (
        <StockRow ticker={ticker} deleteStock={deleteStock} />
      ))}
    </div>
  )
}
