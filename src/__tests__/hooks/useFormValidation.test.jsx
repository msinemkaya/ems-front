import '@testing-library/jest-dom'
import { act, renderHook } from '@testing-library/react'
import { useFormValidation } from '../../hooks/useFormValidation.js'

jest.mock('../../utils/yupAuthSchema', () => ( {
  __esModule: true,
  default: jest.requireMock('../../__mocks__/utils/yupAuthSchema.js').default,
} ))

describe('useFormValidation', () => {
  it('should initialize correctly', () => {
    const initialState = { username: '', email: '' }
    const { result } = renderHook(() => useFormValidation(initialState))

    expect(result.current.userInfo).toEqual(initialState)
    expect(result.current.errors).toEqual({})
  })

  it('should handle input changes', () => {
    const initialState = { username: '', email: '' }
    const { result } = renderHook(() => useFormValidation(initialState))

    act(() => {
      result.current.handleChange({ target: { name: 'username', value: 'foo' } })
    })

    expect(result.current.userInfo).toEqual({ username: 'foo', email: '' })
  })

  it('should validate on blur with invalid input', async () => {
    const initialState = { username: '', email: '' }
    const { result } = renderHook(() => useFormValidation(initialState))

    await act(async () => {
      await result.current.handleBlur({ target: { name: 'username', value: '' } })
    })

    expect(result.current.errors).toEqual({ username: 'Username is required' })
  })

  it('should validate on blur with valid input', async () => {
    const initialState = { username: '', email: '' }
    const { result } = renderHook(() => useFormValidation(initialState))

    await act(async () => {
      await result.current.handleBlur({ target: { name: 'username', value: 'validUser' } })
    })

    expect(result.current.errors).toEqual({ username: '' })
  })

  it('should handle submission with valid data', async () => {
    const initialState = { username: 'foo', email: 'foo@bar.com' }
    const onSubmit = jest.fn()
    const { result } = renderHook(() => useFormValidation(initialState))

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: jest.fn() }, onSubmit)
    })

    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(result.current.errors).toEqual({})
  })

  it('should handle submission with invalid data', async () => {
    const initialState = { username: '', email: 'invalid-email' }
    const { result } = renderHook(() => useFormValidation(initialState))

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: jest.fn() }, () => {
      })
    })

    expect(result.current.errors).toEqual({
      username: 'Username is required',
      email: 'Invalid email',
    })
  })
})
