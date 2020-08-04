import React, { useState } from 'react'

export const AddStock = (props) => {
    const addStock = props.addStock;
    const resetStockList = props.resetStockList;
    const [stockTicker, setStockTicker] = useState('')

    const handleOnChange = (e) => {
        e.preventDefault();
        setStockTicker(e.target.value);
        console.log(stockTicker, 'value change');
    }
    return (
        <div>
            <div className="stock-input">
                <label>Enter a symbol to search share price</label> <br />
                <input type="text" placeholder="example AAPL for Apple, TSLA for Tesla" onChange={handleOnChange} />
            </div>
            <button className="btn" onClick={() => addStock(stockTicker)}>Add Stock</button>
            <button className="btn" onClick={() =>resetStockList() }>Reset List</button>
        </div>
    )
}
