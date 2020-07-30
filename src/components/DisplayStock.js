import React from 'react'
import { StockRow } from './StockRow'

export const DisplayStock = (props) => {

    const stockList = props.stockList;
    const deleteStock = props.deleteStock;
    return (
        <div>
            <div className="container">
                <div className="col-md-5 mt-5">
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {stockList.map((ticker) => <StockRow ticker={ticker} deleteStock={deleteStock}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

                    // <StockRow ticker="AAPL" />
                    // <StockRow ticker="goog" />
                    // <StockRow ticker="tsla" />
                    // <StockRow ticker="msft" />
                    // <StockRow ticker="amzn" />
                    // <StockRow ticker="bac" />