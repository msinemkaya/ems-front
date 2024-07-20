import { Input } from '../components/common/Input.jsx'
import { Form } from '../components/layouts/Form.jsx'
import { useFormValidation } from '../hooks/useFormValidation.js'
import { SelectBox } from '../components/common/SelectBox.jsx'

export const Register = () => {
  const { errors, handleChange, handleBlur, handleSubmit } = useFormValidation({
    email: '',
    password: '',
    userType: '',
    passwordConfirmation: '',
  })

  const onSubmit = () => {
    //   TODO
  }

  return (
    <Form title="register" onSubmit={(e) => handleSubmit(e, onSubmit)}
          subtext="start your learning journey by registering in!" axis="x">
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

      <Input
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors.passwordConfirmation}
        name="passwordConfirmation"
        label="Password Confirmation"
        type="passwordConfirmation"
      />

      <SelectBox
        options={[ 'teacher', 'student' ]}
        label="What are you registering as?"
        errors={errors.userType}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Form>
  )
}
