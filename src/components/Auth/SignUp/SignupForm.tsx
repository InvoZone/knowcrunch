'use client';

import { useState } from 'react';
import type { FC } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import CustomBtn from '@/components/Common/CustomBtn';
import CustomInput from '@/components/Common/CustomInput';
import { Divider, InputAdornment, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as yup from 'yup';
import Image from 'next/image';
import CompleteRegistration from './CompleteRegistration';
import {
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REQUIRED,
  PASSWORD_MATCH
} from '@/constants/validationMessages';

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
    onSubmit: (
      values: SubmitValues,
      { setSubmitting }: FormikHelpers<SubmitValues>
    ) => {
      handleSubmitForm();
      setShowCompleteRegistration(true);
      setSubmitting(false);
    }
  });

  const googleSignup = useGoogleLogin({});

  if (showCompleteRegistration) {
    return <CompleteRegistration t={t} handleClose={handleClose} />;
  }

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <form onSubmit={formik.handleSubmit} aria-label="Signup form">
      {/* Email input field */}
      <CustomInput
        name="email"
        label={t('email')}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        touched={formik.touched.email}
        mb={1}
        aria-label="Email input"
      />

      {/* Password input field */}
      <CustomInput
        name="password"
        label={t('password')}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        touched={formik.touched.password}
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
                  <Image
                    src={showPassword ? '/icons/header/eye.svg' : '/icons/header/eyeClose.svg'}
                    alt={showPassword ? 'eye_icon' : 'eye_close_icon'}
                    aria-label={showPassword ? 'show password' : 'hide password'}
                    loading="lazy"
                    height={20}
                    width={20}
                  />
                </IconButton>
              </InputAdornment>
            )
          }
        }}
      />

      {/* Rewrite Password input field */}
      <CustomInput
        name="confirmPassword"
        label={t('rewritePassword')}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        touched={formik.touched.confirmPassword}
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
                  <Image
                    src={
                      showConfirmPassword ? '/icons/header/eye.svg' : '/icons/header/eyeClose.svg'
                    }
                    alt={showConfirmPassword ? 'eye_icon' : 'eye_close_icon'}
                    aria-label={
                      showConfirmPassword ? 'show confirm password' : 'hide confirm password'
                    }
                    loading="lazy"
                    height={20}
                    width={20}
                  />
                </IconButton>
              </InputAdornment>
            )
          }
        }}
      />

      {/* Submit button for email/password signup */}
      <CustomBtn
        type="submit"
        title={t('continue')}
        variant="contained"
        loading={formik.isSubmitting}
        color="secondary"
        sx={{
          backgroundColor: 'base1.default',
          width: '100%',
          opacity:
            !formik.values.email || !formik.values.password || !formik.values.confirmPassword
              ? 0.5
              : 1
        }}
        aria-label="Continue with email/password"
      />

      {/* Divider between signup methods */}
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

      {/* Google OAuth signup button */}
      <CustomBtn
        type="button"
        title={t('continueWithGoogle')}
        variant="outlined"
        onClick={googleSignup}
        startIcon={
          <Image
            src="/icons/header/google.svg"
            width={24}
            height={24}
            loading="lazy"
            alt="google"
          />
        }
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
