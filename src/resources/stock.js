import { iex } from '../config/iex'
import axios from 'axios'

export const stock = {
  latestPrice: async (ticker) => {
    try {
      const data = await axios
        .get(stock.latestPriceURL(ticker))
        .then((response) => response.data)
      return data
    } catch (error) {
      console.log(error)
    }
  },

  latestPriceURL: (ticker) => {
    return `${iex.base_url}/stock/${ticker}/chart/5d?includeToday=true&token=${iex.api_token}`
  },
}
