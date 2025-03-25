'use client';
import CustomDialog from '@/components/Common/CustomDialog';
import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import ForgotForm from './ForgotForm';
import { openForgotPopup } from '@/lib/slices/auth';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

const ForgotPassword: React.FC = () => {
  const dispatch = useAppDispatch();
  const t = useTranslations('account');
  const { forgotPopup } = useAppSelector((state) => state.auth);

  const handleClose = () => {
    dispatch(
      openForgotPopup({
        forgotPopup: false
      })
    );
  };

  return (
    <>
      {/* Forgot Password dialog containing the form */}
      <CustomDialog
        open={forgotPopup}
        handleClose={handleClose}
        aria-label="Forgot Password Dialog"
      >
        {/* Dialog heading */}
        <Typography variant="h4" color="tertiary" pb={1}>
          {t('resetYourPassword')}
        </Typography>
        <Typography variant="body1" color="secondary.dark" pb={3}>
          {t('resetInstruction')}
        </Typography>

        <ForgotForm t={t} handleClose={handleClose} />
      </CustomDialog>
    </>
  );
};

export default ForgotPassword;
