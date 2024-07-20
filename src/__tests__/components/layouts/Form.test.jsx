import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Form } from '../../../components/layouts/Form.jsx'

jest.mock('../../../components/common/AuthLink.jsx', () => ( {
  AuthLink: ({ text }) => <div role="link">{text}</div>,
} ))

jest.mock('../../../components/common/WithGoogleButton.jsx', () => ( {
  WithGoogleButton: () => <div>Google Button</div>,
} ))

describe('Form', () => {
  it('should render correctly with title, children and subtext', () => {
    render(
      <Form title="foo" subtext="bar">
        <div>children</div>
      </Form>,
    )

    const titleElement = screen.getByRole('heading', { level: 2, name: 'foo' })
    const buttonElement = screen.getByRole('button', { name: 'foo' })
    const childrenElement = screen.getByText('children')
    const subTextElement = screen.getByText('bar')

    expect(titleElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
    expect(childrenElement).toBeInTheDocument()
    expect(subTextElement).toBeInTheDocument()
  })

  it('should render submit button', () => {
    render(
      <Form title="foo" subtext="bar" onSubmit={() => {
      }}>
        <div>children</div>
      </Form>,
    )

    const googleButtonElement = screen.getByText('Google Button')
    const submitButtonElement = screen.getByRole('link', { name: 'Login' })

    expect(googleButtonElement).toBeInTheDocument()
    expect(submitButtonElement).toBeInTheDocument()
  })

  it('should render AuthLink with correct text', () => {
    render(
      <Form title="login" subtext="bar" onSubmit={() => {
      }}>
        <div>children</div>
      </Form>,
    )

    const authLinkElement = screen.getByText('Register')
    expect(authLinkElement).toBeInTheDocument()
  })

  it('should handle form submission', () => {
    const handleSubmit = jest.fn().mockImplementation((e) => e.preventDefault())

    render(
      <Form title="foo" subtext="bar" onSubmit={handleSubmit}>
        <div>children</div>
      </Form>,
    )

    const submitButtonElement = screen.getByRole('button', { name: 'foo' })
    fireEvent.click(submitButtonElement)

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  it('should render form layout with axis prop as x', () => {
    render(
      <Form title="foo" subtext="bar" axis="x">
        <div>children</div>
      </Form>,
    )

    const formElement = screen.getByRole('form')
    expect(formElement).toHaveClass('flex-row gap-12')
  })
})
