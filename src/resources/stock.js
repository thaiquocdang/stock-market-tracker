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

    yesterdayClosePrice: (ticker, date) =>{
        const yesterdayData = axios.get(stock.yesterdayCloseURL(ticker, date)).then(response => response.data);
        return yesterdayData;
    },

    latestPriceURL: (ticker)=>{
        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`;
    },

    yesterdayCloseURL: (ticker, date) => {
        var today = new Date(date).toISOString().split('T')[0].replace(/-/g,'')
        console.log(today, 'today');

        const url = `${iex.base_url}/ref-data/us/dates/trade/last/1/${today}?token=${iex.api_token}`;
        console.log(url);
        fetch(url).then((res) => res.json()).then(console.log)

        return `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&exactDate=20200723&token=${iex.api_token}`;
    }
}