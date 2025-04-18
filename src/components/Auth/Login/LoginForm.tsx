'use client';

import { useGoogleLogin } from '@react-oauth/google';
import CustomBtn from '@/components/Common/CustomBtn';
import CustomInput from '@/components/Common/CustomInput';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
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
import EyeIcon from '../../../../public/icons/header/eye.svg';
import EyeCloseIcon from '../../../../public/icons/header/eyeClose.svg';
import GoogleIcon from '../../../../public/icons/header/google.svg';

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

const LoginForm: FC<LoginFormProps> = ({ t, handleClose, handleOpenForgotPopup }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      dispatch(login(true));
      handleClose();
      setSubmitting(false);
    }
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

  const handleLogin = useGoogleLogin({});

  return (
    <form onSubmit={handleSubmit} aria-label="Login form">
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

      <Box display="flex" justifyContent="space-between" height={24}>
        <CustomCheckbox
          label={t('rememberMe')}
          checked={values.rememberMe}
          onChange={handleChange}
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

      <CustomBtn
        type="submit"
        title={t('signin')}
        variant="contained"
        loading={false}
        sx={{
          backgroundColor: 'accents.bubble1',
          width: '100%',
          mt: 3,
          opacity: Object.values(errors).some(Boolean) ? 0.5 : 1
        }}
        aria-label="Sign in button"
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
        onClick={handleLogin}
        startIcon={<GoogleIcon />}
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
