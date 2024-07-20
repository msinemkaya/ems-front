import * as yup from 'yup'

const mockYupAuthSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
})

mockYupAuthSchema.validateAt = jest.fn((path, value) => {
  if ( path === 'username' && value.username === '' ) {
    return Promise.reject(new Error('Username is required'))
  }
  return Promise.resolve()
})

mockYupAuthSchema.validate = jest.fn(async (value, options) => {
  const errors = {}

  if ( !value.username ) {
    errors.username = 'Username is required'
  }

  if ( !value.email ) {
    errors.email = 'Email is required'
  }
  else if ( !yup.string().email().isValidSync(value.email) ) {
    errors.email = 'Invalid email'
  }

  if ( Object.keys(errors).length ) {
    return Promise.reject({
      inner: Object.keys(errors).map(key => ( {
        path: key,
        message: errors[key],
      } )),
    })
  }

  return Promise.resolve()
})

export default mockYupAuthSchema
