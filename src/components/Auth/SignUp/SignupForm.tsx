'use client';

import { useState } from 'react';
import type { FC } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import CustomBtn from '@/components/Common/CustomBtn';
import CustomInput from '@/components/Common/CustomInput';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as yup from 'yup';
import CompleteRegistration from './CompleteRegistration';
import {
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REQUIRED,
  PASSWORD_MATCH
} from '@/constants/validationMessages';
import EyeIcon from '../../../../public/icons/header/eye.svg';
import EyeCloseIcon from '../../../../public/icons/header/eyeClose.svg';
import GoogleIcon from '../../../../public/icons/header/google.svg';

const validationSchema = yup.object({
  email: yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRED),
  password: yup.string().min(1, PASSWORD_MIN_LENGTH).required(PASSWORD_REQUIRED),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], PASSWORD_MATCH)
    .required(PASSWORD_REQUIRED)
});

const initialValues = {
  email: '',
  password: '',
  confirmPassword: ''
};

interface SignupFormProps {
  t: (_key: string) => string;
  handleClose: () => void;
  handleSubmitForm: () => void;
}

interface SubmitValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: FC<SignupFormProps> = ({ t, handleClose, handleSubmitForm }) => {
  const [showCompleteRegistration, setShowCompleteRegistration] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values: SubmitValues, { setSubmitting }: FormikHelpers<SubmitValues>) => {
      handleSubmitForm();
      setShowCompleteRegistration(true);
      setSubmitting(false);
    }
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors, isSubmitting } = formik;

  const googleSignup = useGoogleLogin({});

  if (showCompleteRegistration) {
    return <CompleteRegistration t={t} handleClose={handleClose} />;
  }

  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

  const toggleShowConfirmPassword = () => setShowConfirmPassword((prevState) => !prevState);

  return (
    <form onSubmit={handleSubmit} aria-label="Signup form">
      <CustomInput
        name="email"
        label={t('email')}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        touched={touched.email}
        mb={1}
        aria-label="Email input"
      />

      <CustomInput
        name="password"
        label={t('password')}
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        touched={touched.password}
        mb={1}
        type={showPassword ? 'text' : 'password'}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={toggleShowPassword}
                  edge="end"
                  color="primary"
                  sx={{ visibility: 'visible' }}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeIcon /> : <EyeCloseIcon />}
                </IconButton>
              </InputAdornment>
            )
          }
        }}
      />

      <CustomInput
        name="confirmPassword"
        label={t('rewritePassword')}
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        touched={touched.confirmPassword}
        mb={3}
        type={showConfirmPassword ? 'text' : 'password'}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={toggleShowConfirmPassword}
                  edge="end"
                  color="primary"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeIcon /> : <EyeCloseIcon />}
                </IconButton>
              </InputAdornment>
            )
          }
        }}
      />

      <CustomBtn
        type="submit"
        title={t('continue')}
        variant="contained"
        loading={isSubmitting}
        color="secondary"
        sx={{
          backgroundColor: 'base1.default',
          width: '100%',
          opacity: Object.values(errors).some(Boolean) ? 0.5 : 1
        }}
        aria-label="Continue with email/password"
      />

      <Divider
        sx={{
          'py': 2,
          '&::before, &::after': {
            borderTop: '1px solid',
            borderColor: 'neutral.neutral4'
          }
        }}
      >
        {t('or')}
      </Divider>

      <CustomBtn
        type="button"
        title={t('continueWithGoogle')}
        variant="outlined"
        onClick={googleSignup}
        startIcon={<GoogleIcon />}
        sx={{
          border: '1px solid',
          borderColor: 'neutral.neutral8',
          width: '100%',
          mb: 2
        }}
        aria-label="Continue with Google"
      />
    </form>
  );
};

export default SignupForm;
