import { Input } from '../components/common/Input.jsx'
import { Form } from '../components/layouts/Form.jsx'
import { useFormValidation } from '../hooks/useFormValidation.js'

export const Login = () => {
  const { errors, handleChange, handleBlur, handleSubmit } = useFormValidation({
    email: '',
    password: '',
  })

  const onSubmit = () => {
    //TODO
  }

  return (
    <Form title="login" onSubmit={(e) => handleSubmit(e, onSubmit)}
          subtext="continue your learning journey by logging in!">
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors.email}
        name="email"
        label="Email"
        type="email"
      />
      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors.password}
        name="password"
        label="Password"
        type="password"
      />
    </Form>
  )
}
