'use client';

import { useState } from 'react';
import type { FC, MouseEvent } from 'react';
import CustomBtn from '@/components/Common/CustomBtn';
import CustomDialog from '@/components/Common/CustomDialog';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
import SignupForm from './SignupForm';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { openLoginSignUpPopup } from '@/lib/slices/auth';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { GOOGLE_CLIENT_ID_REQUIRED } from '@/constants/validationMessages';

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

if (!googleClientId) {
  throw new Error(GOOGLE_CLIENT_ID_REQUIRED);
}

interface SignupProps {
  onClick?: (_event: MouseEvent<HTMLElement>) => void;
}

type RegisterText = 'signupHeading' | 'completeRegistration';

const Signup: FC<SignupProps> = ({ onClick = () => '' }) => {
  const [registerText, setRegisterText] = useState<RegisterText>('signupHeading');
  const dispatch = useAppDispatch();
  const t = useTranslations('account');
  const signupPopup = useAppSelector((state) => state.auth.signupPopup);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    onClick(event);
    setRegisterText('signupHeading');
    dispatch(
      openLoginSignUpPopup({
        signupPopup: true
      })
    );
  };

  const handleClose = () => {
    dispatch(
      openLoginSignUpPopup({
        signupPopup: false
      })
    );
  };

  const handleSubmitForm = () => {
    setRegisterText('completeRegistration');
  };

  const handleOpenLogin = () => {
    dispatch(
      openLoginSignUpPopup({
        signupPopup: false,
        loginPopup: true
      })
    );
  };

  return (
    <>
      <CustomBtn
        variant="contained"
        title={t('joinUs')}
        sx={{
          backgroundColor: 'accents.bubble1',
          minWidth: 100
        }}
        onClick={handleOpen}
        aria-label="Open Signup Dialog"
      />

      <CustomDialog open={signupPopup} handleClose={handleClose} aria-label="Signup Dialog">
        <Typography variant="h4" color="tertiary" pb={3}>
          {t(registerText)}
        </Typography>
        <GoogleOAuthProvider clientId={googleClientId}>
          <SignupForm t={t} handleClose={handleClose} handleSubmitForm={handleSubmitForm} />
          {registerText === 'signupHeading' && (
            <Typography
              variant="body"
              color="neutral.neutral4"
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {t('alreadyHaveAccount')} {'  '}
              <CustomBtn
                onClick={handleOpenLogin}
                color="link.light"
                fontWeight={800}
                txtVariant="body"
                aria-label="Sign up link"
                title={t('signin')}
                sx={{ height: '24px' }}
              />
            </Typography>
          )}
        </GoogleOAuthProvider>
      </CustomDialog>
    </>
  );
};

export default Signup;
