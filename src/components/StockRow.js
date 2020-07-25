import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { stock } from '../resources/stock';

const changeStyle = {
    color: '#69c02c',
    fontSize: '0.8rem',
    marginLeft: 6
}

export const StockRow = (props) => {
    const ticker = props.ticker;
    const [stockData, setStockData] = useState({})

    useEffect(async () => {

        const result = await stock.latestPrice(ticker);
        // console.log(result,'result');
        // console.log(result[0],'result 000');
        setStockData(result[0]);
    }, [])

    console.log(stockData, 'stock DATA');

    return (
        <li className="list-group-item">
            <b>{ticker}</b>
        ${stockData.close}
            <span className="change" style={changeStyle}>
                +12.34 (5.3%)
        </span>
        </li>
    )
}


// try{
//     //query the API to get data
//     const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`

//     const response = await axios(url);
//     // console.log(response);
//     console.log(response.data[response.data.length - 1]);
//     setStockData(response.data[response.data.length - 1]);

// }catch(error){
//     console.log(error);
// }

// <tr>
//     <td>{ticker}</td>
//     <td>{stockData.close}</td>
//     <td>{stockData.date}</td>
//     <td>{stockData.label}</td>
// </tr>