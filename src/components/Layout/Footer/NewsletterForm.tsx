import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomBtn from '@/components/Common/CustomBtn';
import CustomInput from './CustomInput';
import { EMAIL_INVALID, EMAIL_REQUIRED } from '@/constants/validationMessages';
import { useTranslations } from 'next-intl';

const validationSchema = Yup.object({
  firstName: Yup.string(),
  surname: Yup.string(),
  email: Yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRED)
});

const initialValues = {
  email: '',
  firstName: '',
  surname: ''
};

const NewsletterForm = () => {
  const t = useTranslations('footer');
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // eslint-disable-next-line no-console
      console.log(`Submitted email: ${values.email}`);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box position={'relative'}>
        <Typography
          component={'span'}
          color="error.light"
          sx={{ position: 'absolute', left: 58, top: 14, zIndex: 1 }}
        >
          *
        </Typography>
        <CustomInput
          name="email"
          value={values.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          touched={touched.email}
          errors={errors.email}
          placeholder={t('e-mail')}
          aria-label="Email"
        />
      </Box>
      <CustomInput
        name="firstName"
        value={values.firstName}
        handleChange={handleChange}
        placeholder={t('firstName')}
        aria-label="First name"
      />
      <CustomInput
        name="surname"
        value={values.surname}
        handleChange={handleChange}
        placeholder={t('surname')}
        aria-label="Surname"
      />
      <CustomBtn
        sx={{
          backgroundColor: 'base1.default',
          color: 'secondary.main',
          borderRadius: '8px',
          width: '100%'
        }}
        color="secondary"
        title={t('subscribe')}
        type="submit"
      />
    </form>
  );
};

export default NewsletterForm;
