import { object, string } from 'yup'

const schema = object({
  email: string().required('No email provided.').email('Invalid email format'),
  password: string()
    .min(8, 'Password is too short should be at least 8 characters.')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter.')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
    .matches(/\d/, 'Password must contain at least one number.')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.')
    .required('No password provided.'),
  userType: string()
    .oneOf(['teacher', 'student'], 'Please select a valid user type')
    .required('User type is required'),
})

export default schema
