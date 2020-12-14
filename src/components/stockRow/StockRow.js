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
  // const [yesterdayData, setYesterdayData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let result = await stock.latestPrice(ticker)
      console.log(result)
      if (result) {
        setStockData(result[result.length - 1])
      }
      // console.log(result, 'resultt');

      //get yesterday data
      // setYesterdayData(result[result.length-2])

      // full list of stocks. However, it is not correct at the moment. Will come back to fix it later
      // let list = await stock.listOfSymbols();
      // console.log(list, 'listtttttttt');
    }
    fetchData()
  }, [])

  // const priceChange = (stockData.close - yesterdayData.close).toFixed(2);
  // const percentageChange = (priceChange/yesterdayData.close*100).toFixed(2) ;

  let changePercent
  if (stockData.changePercent) {
    changePercent = stockData.changePercent.toFixed(2)
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

  // console.log(stockData);
  return (
    <div className='stock-row'>
      <button className='btn' onClick={() => deleteStock(ticker)}>
        X
      </button>
      <div className='stock-data'>
        <div>{ticker}</div>
        <div>${stockData.close}</div>
        <div>{stockData.change.toFixed(2)}</div>
        <div lassName='change' style={changeStyle()}>
          ({changePercent}%)
        </div>
      </div>
      <button className='btn' onClick={() => displayChart()}>
        Chart
      </button>
    </div>
  )
}
