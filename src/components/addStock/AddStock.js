import React, { useState } from 'react'

export const AddStock = (props) => {
  const addStock = props.addStock
  const resetStockList = props.resetStockList
  const [stockTicker, setStockTicker] = useState('')

  const handleOnChange = (e) => {
    e.preventDefault()
    setStockTicker(e.target.value.toLowerCase())
    console.log(stockTicker, 'value change')
  }
  return (
    <div>
      <div className='stock-input'>
        <label data-testid='label'>Enter a symbol to search share price</label>{' '}
        <br />
        <input
          type='text'
          placeholder='example AAPL for Apple, TSLA for Tesla'
          onChange={handleOnChange}
          data-testid='stock-input'
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              addStock(stockTicker)
            }
          }}
        />
      </div>
      <button
        className='btn'
        onClick={() => addStock(stockTicker)}
        data-testid='addstock-button'
      >
        Add Stock
      </button>
      <button
        className='btn'
        onClick={() => resetStockList()}
        data-testid='resetlist-button'
      >
        Reset List
      </button>
    </div>
  )
}
