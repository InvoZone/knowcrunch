'use client';

import { useGoogleLogin } from '@react-oauth/google';
import CustomBtn from '@/components/Common/CustomBtn';
import CustomInput from '@/components/Common/CustomInput';
import { Box, Divider, InputAdornment, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { login } from '@/lib/slices/auth';
import CustomCheckbox from '@/components/Common/CustomCheckbox';
import { useState } from 'react';
import type { FC } from 'react';
import {
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REQUIRED
} from '@/constants/validationMessages';

const validationSchema = yup.object({
  email: yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRED),
  password: yup.string().min(1, PASSWORD_MIN_LENGTH).required(PASSWORD_REQUIRED),
  rememberMe: yup.boolean()
});

interface LoginFormProps {
  t: (_key: string) => string;
  handleClose: () => void;
  handleOpenForgotPopup: () => void;
}

const initialValues = {
  email: '',
  password: '',
  rememberMe: false
};

/**
 * LoginForm component handles user authentication through email/password and Google OAuth
 */
const LoginForm: FC<LoginFormProps> = ({ t, handleClose, handleOpenForgotPopup }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(login(true));
      handleClose();
      setSubmitting(false);
    }
  });

  const handleLogin = useGoogleLogin({});

  return (
    <form onSubmit={formik.handleSubmit} aria-label="Login form">
      {/* Email input field */}
      <CustomInput
        name="email"
        label={t('email')}
        formik={formik}
        mb={1}
        aria-label="Email input"
      />

      {/* Password input field */}
      <CustomInput
        name="password"
        label={t('password')}
        formik={formik}
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

      <Box component="div" display="flex" justifyContent="space-between" height={24}>
        <CustomCheckbox
          label={t('rememberMe')}
          checked={formik.values.rememberMe}
          onChange={formik.handleChange}
          name="rememberMe"
          colors={{ unchecked: 'neutral.neutral5' }}
          aria-label="Remember me checkbox"
        />

        <CustomBtn
          onClick={handleOpenForgotPopup}
          variant="text"
          color="link.light"
          fontWeight={800}
          txtVariant="body"
          aria-label="Sign up link"
          title={t('forgotPassword')}
          sx={{ height: '24px' }}
        />
      </Box>

      {/* Submit button for email/password login */}
      <CustomBtn
        type="submit"
        title={t('signin')}
        variant="contained"
        loading={false}
        sx={{
          backgroundColor: 'accents.bubble1',
          width: '100%',
          mt: 3,
          opacity: !formik.values.email && !formik.values.password ? 0.5 : 1
        }}
        aria-label="Sign in button"
      />

      {/* Divider between login methods */}
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

      {/* Google OAuth login button */}
      <CustomBtn
        type="button"
        title={t('continueWithGoogle')}
        variant="outlined"
        onClick={handleLogin}
        startIcon={
          <Image
            src="/icons/header/google.svg"
            width={24}
            height={24}
            loading="lazy"
            alt="google"
            aria-label="Google icon"
          />
        }
        sx={{
          border: '1px solid',
          borderColor: 'neutral.neutral8',
          width: '100%',
          mb: 2
        }}
        aria-label="Continue with Google button"
      />
    </form>
  );
};

export default LoginForm;
