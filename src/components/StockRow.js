import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { stock } from '../resources/stock';

export const StockRow = (props) => {
    const ticker = props.ticker;
    const [stockData, setStockData] = useState({});
    const [yesterdayData, setYesterdayData] = useState({});

    useEffect(async () => {
        //get today data
        const result = await stock.latestPrice(ticker);
        setStockData(result[0]);

        //get yesterday data
        const yesterdayResult = await stock.yesterdayClosePrice(ticker, '2020-04-15');
        setYesterdayData(yesterdayResult[0])
    }, [])

    // console.log(stockData, 'today DATA', ticker);
    // console.log(yesterdayData, 'yesterday DATA', ticker);

    const dollarChange = (stockData.close - yesterdayData.close).toFixed(2);
    const percentageChange = (dollarChange/yesterdayData.close*100).toFixed(2) ;

    const changeStyle = () => {
        return {
            color: dollarChange > 0 ? '#69c02c' : '#f23a0c' ,
            fontSize: '0.8rem',
            marginLeft: 6
        }
    }

    return (
        <li className="list-group-item">
            <b>{ticker}</b>
            &nbsp; ${stockData.close}
            <span className="change" style={changeStyle()}>
                {dollarChange} &nbsp;({percentageChange}%)
        </span>
        </li>
    )
}
