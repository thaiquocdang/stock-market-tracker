import React from 'react'
import ReactDom from 'react-dom'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import { StockRow } from './StockRow'

describe('Test case for StockRow component', () => {
  test('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDom.render(<StockRow></StockRow>, div)
  })

  test('should component work as expected flow', () => {
    const mockDeleteStockFn = jest.fn()
    const componentStockRow = render(
      <StockRow deleteStock={mockDeleteStockFn} ticker=''></StockRow>
    )

    fireEvent.click(componentStockRow.getByTestId('deleterow-button'))
    expect(mockDeleteStockFn).toHaveBeenCalledTimes(1)

    // fireEvent.click(componentStockRow.getByTestId('displaychart-button'))
    // expect(mockDeleteStockFn).toHaveBeenCalledTimes(1)
    // const displayChart = componentStockRow.getByTestId('displaychart-button')
  })

  // test('should displaychart button works', () => {
  //   configure({ adapter: new Adapter() })
  //   const wrapper = shallow(<StockRow deleteStock={() => {}} ticker='' />)
  //   const instance = wrapper.instance()
  //   console.log(instance)
  //   wrapper.find('.display-chart').simulate('click')
  //   expect(instance.displayChart).toHaveBeenCalledTimes(1)
  // })
})
