import { useState } from 'react';
import yupAuthSchema from '../utils/yupAuthSchema';

export const useFormValidation = (initialState) => {
  const [userInfo, setUserInfo] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleBlur = async (e) => {
    try {
      await yupAuthSchema.validateAt(e.target.name, { [e.target.name]: e.target.value });
      setErrors({ ...errors, [e.target.name]: '' });
    } catch (validationError) {
      setErrors({ ...errors, [e.target.name]: validationError.message });
    }
  };

  const handleSubmit = async (e, onSubmit) => {
    e.preventDefault();
    try {
      await yupAuthSchema.validate(userInfo, { abortEarly: false });
      onSubmit();
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return {
    userInfo,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
