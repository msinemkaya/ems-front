import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { SelectBox } from '../../../components/common/SelectBox.jsx'

describe('SelectBox', () => {
  it('renders select box with correct label', () => {
    render(<SelectBox label="select" options={[]}/>)

    const selectElement = screen.getByText('select')
    expect(selectElement).toBeInTheDocument()
  })

  it('renders select box with correct options', () => {
    const options = [ 'foo', 'bar' ]

    render(<SelectBox label="select" options={options}/>)

    options.forEach(option => {
      const optionElement = screen.getByText(option)
      expect(optionElement).toBeInTheDocument()
    })
  })

  it('renders select box with error message', () => {
    render(<SelectBox label="select" options={[]} errors="error message"/>)

    const selectElement = screen.getByText('error message')
    expect(selectElement).toBeInTheDocument()
  })

  it('handles option change correctly', () => {
    const options = [ 'foo', 'bar' ]

    render(<SelectBox label="select" options={options}/>)
    const selectElement = screen.getByRole('combobox')
    fireEvent.change(selectElement, { target: { value: 'foo' } })

    expect(selectElement.value).toBe('foo')
  })
})
