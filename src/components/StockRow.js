import React, { useState, useEffect } from 'react'
import { stock } from '../resources/stock';
import './StockRow.css'

export const StockRow = (props) => {
    const ticker = props.ticker;
    const deleteStock = props.deleteStock;
    const [stockData, setStockData] = useState({
        change: 0,
        changeOverTime: 0,
        changePercent: 0,
        close: 0,
        date: "",
        high: 0,
        label: "Jul 22",
        low: 0,
        open: 0,
        uOpen: 0,
        uVolume: 0,
        volume: 0
    });
    // const [yesterdayData, setYesterdayData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let result = await stock.latestPrice(ticker);
            if (result) {
                setStockData(result[result.length - 1]);
            }
            console.log(result, 'resultt');


            //get yesterday data
            // setYesterdayData(result[result.length-2])
        }
        fetchData();
    }, [])

    // const priceChange = (stockData.close - yesterdayData.close).toFixed(2);
    // const percentageChange = (priceChange/yesterdayData.close*100).toFixed(2) ;


    const changeStyle = () => {
        return {
            color: stockData.change > 0 ? '#69c02c' : '#f23a0c',
            fontSize: '0.8rem',
            marginLeft: 6
        }
    }

    const displayChart = () => {
        console.log('display chart');
    }

    console.log(stockData);
    return (
        <div className="stock-row">
            <button onClick={() => deleteStock(ticker)}>X</button>
            <span>{ticker}</span>
            <span>${stockData.close}</span>
            <span className="change" style={changeStyle()}>
                {stockData.change} &nbsp;({stockData.changePercent}%)
            </span>
            <button onClick={displayChart()}>Chart</button>

        </div>
    )
}
