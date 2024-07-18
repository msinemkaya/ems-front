import '@testing-library/jest-dom'
import { AuthLink } from '../../../components/common/AuthLink.jsx'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('AuthLink', () => {
  beforeEach(() => (
    render(
      <MemoryRouter>
        <AuthLink text="Hello" to="/"/>
      </MemoryRouter>,
    )
  ))


  it('renders correctly', () => {
    const linkElement = screen.getByText('Hello')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.closest('a')).toHaveAttribute('href', '/')

    const iconElement = linkElement.querySelector('svg')
    expect(iconElement).toBeInTheDocument()
  })

  it('redirects on click correctly', () => {
    const linkElement = screen.getByText('Hello')
    userEvent.click(linkElement)
    expect(window.location.pathname).toEqual('/')
  })
})
