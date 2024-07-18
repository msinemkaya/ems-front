import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from '../../../components/common/Input.jsx'

describe('Input', () => {
  it('renders correctly with correct labels', () => {
    render(<Input label="foo" name="foo"/>)

    const inputElement = screen.getByLabelText('foo')
    expect(inputElement).toBeInTheDocument()
  })

  it('renders correctly with error messages', () => {
    render(<Input label="foo" name="foo" errors="error message"/>)

    const inputElement = screen.getByText('error message')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveClass('text-red-500')
  })

  it('calls handleChange on input change', () => {
    const handleChange = jest.fn()
    render(<Input label="foo" name="foo" handleChange={handleChange}/>)

    const inputElement = screen.getByLabelText('foo')
    fireEvent.change(inputElement, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('applies correct type to input', () => {
    render(<Input label="foo" name="foo" type="password"/>)

    const inputElement = screen.getByLabelText('foo')
    expect(inputElement).toHaveAttribute('type', 'password')
  })
})
