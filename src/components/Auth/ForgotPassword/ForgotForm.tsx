'use client';

import CustomBtn from '@/components/Common/CustomBtn';
import CustomInput from '@/components/Common/CustomInput';
import { useFormik } from 'formik';
import type { FC } from 'react';
import * as yup from 'yup';
import { EMAIL_INVALID, EMAIL_REQUIRED } from '@/constants/validationMessages';

const validationSchema = yup.object({
  email: yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRED)
});

interface ForgotFormProps {
  t: (_key: string) => string;
  handleClose: () => void;
}

const ForgotPasswordForm: FC<ForgotFormProps> = ({ t, handleClose }) => {
  const handleFormSubmit = () => {
    handleClose();
  };

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema,
    onSubmit: handleFormSubmit
  });

  return (
    <form onSubmit={handleSubmit} aria-label="Forgot Password Form">
      <CustomInput
        name={'email'}
        label={t('email')}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        touched={touched.email}
        mb={1}
        aria-label="Email input"
      />

      <CustomBtn
        type="submit"
        title={t('sendResetLink')}
        variant="contained"
        loading={false}
        color="base2.light6"
        sx={{
          backgroundColor: 'base1.default',
          width: '100%',
          mt: 3
        }}
        aria-label="Send Reset Link"
      />
    </form>
  );
};

export default ForgotPasswordForm;
