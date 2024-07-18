import { object, ref, string } from 'yup'

const schema = object({
  email: string().required('You should provide an email.').email('Invalid email format.'),
  password: string()
    .min(8, 'Password is too short should be minimum 8 characters.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.')
    .required('You should provide a password.'),
  userType: string()
    .required('User type is required')
    .oneOf([ 'teacher', 'student' ], 'Please select a valid user type'),
  passwordConfirmation: string().required('You should provide a confirmation password.')
    .oneOf([ ref('password'), null ], 'Passwords must match'),
})

export default schema
