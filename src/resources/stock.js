import {iex} from '../config/iex'
import axios from 'axios'



export const stock = {
    latestPrice: async (ticker) => {
        const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.api_token}`;
        try{
            return axios.get(url).then(response => response.data);
        }catch(error){
            console.log(error);
        }

    }
}