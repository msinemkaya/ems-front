import yupAuthSchema from '../../utils/yupAuthSchema.js'

describe('yupAuthSchema', () => {
  it('should validate valid data', async () => {
    const data = {
      email: 'test@test.com',
      password: 'aVeryVa1idPassword.',
      userType: 'teacher',
      passwordConfirmation: 'aVeryVa1idPassword.',
    }

    await expect(yupAuthSchema.validate(data)).resolves.toEqual(data)
  })

  it('should require email', async () => {
    const data = {
      password: 'aVeryVa1idPassword.',
      userType: 'teacher',
      passwordConfirmation: 'aVeryVa1idPassword.',
    }

    await expect(yupAuthSchema.validate(data)).rejects.toHaveProperty('errors', [ 'You should provide an email.' ])
  })

  it('should require password', async () => {
    const data = {
      email: 'test@test.com',
      password: 'short',
      userType: 'teacher',
      passwordConfirmation: 'short',
    }

    await expect(yupAuthSchema.validate(data)).rejects.toHaveProperty('errors', [
      'Password is too short should be minimum 8 characters.',
    ])
  })

  it('should validate password complexity', async () => {
    const invalidData = {
      email: 'test@test.com',
      password: 'NoNumber!',
      userType: 'teacher',
      passwordConfirmation: 'NoNumber!',
    }

    await expect(yupAuthSchema.validate(invalidData))
      .rejects.toHaveProperty('errors', [
        'Password must contain at least one number.',
      ])
  })

  it('should require user type', async () => {
    const invalidData = {
      email: 'test@test.com',
      password: 'aVeryVa1idPassword.',
      passwordConfirmation: 'aVeryVa1idPassword.',
    }

    await expect(yupAuthSchema.validate(invalidData))
      .rejects.toHaveProperty('errors', [ 'User type is required' ])
  })

  it('should validate user type', async () => {
    const invalidData = {
      email: 'test@test.com',
      password: 'aVeryVa1idPassword.',
      userType: 'admin',
      passwordConfirmation: 'aVeryVa1idPassword.',
    }

    await expect(yupAuthSchema.validate(invalidData))
      .rejects.toHaveProperty('errors', [ 'Please select a valid user type' ])
  })

  it('should require password confirmation and check if passwords match', async () => {
    const invalidData = {
      email: 'test@example.com',
      password: 'aVeryVa1idPassword.',
      userType: 'teacher',
      passwordConfirmation: 'aVeryVa1idDifferentPassword!',
    }

    await expect(yupAuthSchema.validate(invalidData))
      .rejects.toHaveProperty('errors', [ 'Passwords must match' ])
  })
})
