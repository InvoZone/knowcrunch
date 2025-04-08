'use client';

import type { FC, MouseEvent } from 'react';
import CustomBtn from '@/components/Common/CustomBtn';
import CustomDialog from '@/components/Common/CustomDialog';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import LoginForm from './LoginForm';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { openForgotPopup, openLoginSignUpPopup } from '@/lib/slices/auth';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { GOOGLE_CLIENT_ID_REQUIRED } from '@/constants/validationMessages';

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

if (!googleClientId) {
  throw new Error(GOOGLE_CLIENT_ID_REQUIRED);
}

interface LoginProps {
  onClick?: (_event: MouseEvent<HTMLElement>) => void;
}

const Login: FC<LoginProps> = ({ onClick = () => {} }) => {
  const dispatch = useAppDispatch();
  const t = useTranslations('account');
  const { loginPopup } = useAppSelector((state) => state.auth);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    onClick(event);
    dispatch(
      openLoginSignUpPopup({
        loginPopup: true
      })
    );
  };

  const handleOpenSignup = () => {
    dispatch(
      openLoginSignUpPopup({
        signupPopup: true,
        loginPopup: false,
        forgotPopup: false
      })
    );
  };

  const handleClose = () => {
    dispatch(
      openLoginSignUpPopup({
        loginPopup: false
      })
    );
  };

  const handleOpenForgotPopup = () => {
    dispatch(
      openForgotPopup({
        forgotPopup: true,
        loginPopup: false
      })
    );
  };

  return (
    <>
      <CustomBtn
        title={t('login')}
        color="secondary"
        sx={{ minWidth: 100 }}
        onClick={handleOpen}
        aria-label="Login button"
      />

      <CustomDialog open={loginPopup} handleClose={handleClose} aria-label="Login dialog">
        <Typography variant="h4" color="tertiary" pb={3}>
          {t('loginHeading')}
        </Typography>
        <GoogleOAuthProvider clientId={googleClientId}>
          <LoginForm
            t={t}
            handleClose={handleClose}
            handleOpenForgotPopup={handleOpenForgotPopup}
          />
          <Box>
            <Typography
              variant="body"
              color="neutral.neutral4"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {t('dontHaveAccount')} {'  '}
              <CustomBtn
                onClick={handleOpenSignup}
                variant="text"
                color="link.light"
                fontWeight={800}
                txtVariant="body"
                aria-label="Sign up link"
                title={t('signup')}
                sx={{ height: '24px' }}
              />
            </Typography>
          </Box>
        </GoogleOAuthProvider>
      </CustomDialog>
    </>
  );
};

export default Login;
