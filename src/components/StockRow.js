import React, { useState, useEffect } from 'react'
import { stock } from '../resources/stock';

export const StockRow = (props) => {
    const ticker = props.ticker.toUpperCase();
    const [stockData, setStockData] = useState({});
    const [yesterdayData, setYesterdayData] = useState({});

    useEffect( () => {
        const fetchData = async () =>{
            const result = await stock.latestPrice(ticker);
            console.log(result, 'result');
            //get today data
            setStockData(result[result.length-1]);
            
            //get yesterday data
            setYesterdayData(result[result.length-2])
        }
        fetchData();
    }, [])

    const priceChange = (stockData.close - yesterdayData.close).toFixed(2);
    const percentageChange = (priceChange/yesterdayData.close*100).toFixed(2) ;

    const changeStyle = () => {
        return {
            color: priceChange > 0 ? '#69c02c' : '#f23a0c' ,
            fontSize: '0.8rem',
            marginLeft: 6
        }
    }

    return (
        <li className="list-group-item">
            <b>{ticker}</b>
            &nbsp; ${stockData.close}
            <span className="change" style={changeStyle()}>
            {priceChange} &nbsp;({percentageChange}%)
        </span>
        </li>
    )
}
