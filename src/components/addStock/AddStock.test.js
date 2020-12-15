import React from 'react'
import ReactDom from 'react-dom'
import { AddStock } from './AddStock'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'

describe('Test case for AddStock component', () => {
  test('Render without crash', () => {
    const div = document.createElement('div')
    ReactDom.render(<AddStock></AddStock>, div)
  })

  test('should render correct label', () => {
    const componentAddStock = render(
      <AddStock addStock={() => {}} resetStockList={() => {}}></AddStock>
    )
    // console.log(componentAddStock)

    const label = componentAddStock.getByTestId('label')
    // console.log(componentAddStock)

    expect(label).toHaveTextContent('Enter a symbol to search share price')
  })

  //test case for handleOnChange function at input
  test('should handleOnChange function happens when input value changed', () => {
    const componentAddStock = render(
      <AddStock addStock={() => {}} resetStockList={() => {}}></AddStock>
    )

    const stockInput = componentAddStock.getByTestId('stock-input')
    fireEvent.change(stockInput, { target: { value: 'aapl' } })
    expect(stockInput.value).toEqual('aapl')
  })

  test('should AddStock button, ResetStock button called', () => {
    const mockFnAddStock = jest.fn()
    const mockFnResetStock = jest.fn()
    const componentAddStock = render(
      <AddStock
        addStock={mockFnAddStock}
        resetStockList={mockFnResetStock}
      ></AddStock>
    )

    //test Add Stock button
    fireEvent.click(componentAddStock.getByTestId('addstock-button'))
    expect(mockFnAddStock).toHaveBeenCalledTimes(1)

    //test Reset Stock button
    fireEvent.click(componentAddStock.getByTestId('resetlist-button'))
    expect(mockFnResetStock).toHaveBeenCalledTimes(1)
  })

  test('should function works as expected flow', () => {
    const mockFnAddStock = jest.fn()
    const mockFnResetStock = jest.fn()
    const componentAddStock = render(
      <AddStock
        addStock={mockFnAddStock}
        resetStockList={mockFnResetStock}
      ></AddStock>
    )

    // b1 input value
    const stockInput = componentAddStock.getByTestId('stock-input')
    fireEvent.change(stockInput, { target: { value: 'aapl' } })

    //b2 click add stock
    fireEvent.click(componentAddStock.getByTestId('addstock-button'))
    expect(mockFnAddStock).toHaveBeenCalledTimes(1)
    expect(mockFnAddStock.mock.calls[0][0]).toBe('aapl')
    // console.log(mockFnAddStock.mock)

    //b3 reset stock
    fireEvent.click(componentAddStock.getByTestId('resetlist-button'))
    expect(mockFnResetStock).toHaveBeenCalledTimes(1)
  })
})
