import { Input } from '../components/common/Input.jsx'
import { Form } from '../components/layouts/Form.jsx'
import { useFormValidation } from '../hooks/useFormValidation.js'

export const Register = () => {
  const { errors, handleChange, handleBlur, handleSubmit } = useFormValidation({
    email: '',
    password: '',
    userType: ''
  })

  const onSubmit = () => {
    //   TODO
  }

  return (
    <Form title="register" onSubmit={(e) => handleSubmit(e, onSubmit)}
          subtext="start your learning journey by registering in!">
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

      <label htmlFor="userType" className='mr-2'>What are you registering as?</label>
      <select className='border-r-8 border-transparent outline outline-secondary p-1 px-2 rounded-lg' id="userType" name="userType">
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>

    </Form>
  )
}
