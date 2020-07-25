import {iex} from '../config/iex'
import axios from 'axios'

export const stock = {
    latestPrice: async (ticker) => {
        try{
            const data = axios.get(stock.latestPriceURL(ticker)).then(response => response.data);
            // const stockData = data[data.length-1];
            // console.log(stockData, 'stock data');
            // const formattedData ={};
            // formattedData.price = stockData.close;
            // formattedData.date = stockData.date;
            // formattedData.time = stockData.time;
            // console.log(formattedData, 'formatted data');
            return data;
        }catch(error){
            console.log(error);
        }
    },

    latestPriceURL: (ticker)=>{
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`;
    }
}