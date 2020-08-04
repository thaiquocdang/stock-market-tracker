import React from 'react'
import { StockRow } from './StockRow'

export const DisplayStock = (props) => {

    const stockList = props.stockList;
    const deleteStock = props.deleteStock;
    return (
        <div className="stock-board">
                {stockList.map((ticker) => <StockRow ticker={ticker} deleteStock={deleteStock} />)}
        </div>
    )
}

                    // <StockRow ticker="AAPL" />
                    // <StockRow ticker="goog" />
                    // <StockRow ticker="tsla" />
                    // <StockRow ticker="msft" />
                    // <StockRow ticker="amzn" />
                    // <StockRow ticker="bac" />