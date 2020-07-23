import React, {useState, useEffect} from 'react'
// import {iex} from '../config/iex'
import axios from 'axios'
import { stock } from '../resources/stock';



export const StockRow = (props) => {
    const ticker = props.ticker;
    const [stockData,setStockData] = useState({})
    
    useEffect( async () => {
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

        const result =await stock.latestPrice(ticker);
        // console.log(result[0]);
        setStockData(result[0]);
        // console.log(stockData);
    }, [])


    return (
        <tr>
            <td>{ticker}</td>
            <td>{stockData.close}</td>
            <td>{stockData.date}</td>
            <td>{stockData.label}</td>
        </tr>
    )
}
