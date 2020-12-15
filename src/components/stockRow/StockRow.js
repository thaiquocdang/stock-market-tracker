import React, { useState, useEffect } from 'react'
import { stock } from '../../resources/stock'
import './StockRow.css'

export const StockRow = (props) => {
  const ticker = props.ticker
  const deleteStock = props.deleteStock
  const [stockData, setStockData] = useState({
    change: 0,
    changeOverTime: 0,
    changePercent: 0,
    close: 0,
    date: '',
    high: 0,
    label: 'Jul 22',
    low: 0,
    open: 0,
    uOpen: 0,
    uVolume: 0,
    volume: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      let result = await stock.latestPrice(ticker)
      if (result) {
        setStockData(result[result.length - 1])
      }
    }
    fetchData()
  }, [ticker])

  let changePercent
  if (stockData.changePercent) {
    changePercent = (stockData.changePercent * 100).toFixed(2)
  } else {
    changePercent = stockData.changePercent
  }

  const changeStyle = () => {
    return {
      color: stockData.change > 0 ? '#69c02c' : '#f23a0c',
      fontSize: '0.8rem',
      marginLeft: 6,
    }
  }

  const displayChart = () => {
    console.log('display chart')
  }

  return (
    <div className='stock-row'>
      <button
        className='btn'
        onClick={() => deleteStock(ticker)}
        data-testid='deleterow-button'
      >
        X
      </button>
      <div className='stock-data'>
        <div>{ticker.toUpperCase()}</div>
        <div>${stockData.close}</div>
        <div>{stockData.change.toFixed(2)}</div>
        <div className='change' style={changeStyle()}>
          ({changePercent}%)
        </div>
      </div>

      <button
        className='btn display-chart'
        onClick={() => displayChart()}
        data-testid='displaychart-button'
      >
        Chart
      </button>
    </div>
  )
}
