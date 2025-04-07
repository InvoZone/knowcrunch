'use client';

import CustomBtn from '@/components/Common/CustomBtn';
import CustomInput from '@/components/Common/CustomInput';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import type { FormikHelpers } from 'formik';
import * as yup from 'yup';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { useDispatch } from 'react-redux';
import { login } from '@/lib/slices/auth';
import CustomCheckbox from '@/components/Common/CustomCheckbox';
import type { FC } from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  surname: yup.string().required('Surname is required'),
  mobile: yup.string().required('Mobile phone is required'),
  workTitle: yup.string().required('Work title is required'),
  company: yup.string().required('Company is required'),
  city: yup.string().required('City is required'),
  marketing: yup.boolean(),
  terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

const initialValues = {
  name: '',
  surname: '',
  mobile: '',
  workTitle: '',
  company: '',
  city: '',
  terms: false,
  marketing: false
};

interface CompleteRegistrationProps {
  t: (_key: string) => string;
  handleClose: () => void;
}

interface FormValues {
  name: string;
  surname: string;
  mobile: string;
  workTitle: string;
  company: string;
  city: string;
  terms: boolean;
  marketing: boolean;
}

const CompleteRegistration: FC<CompleteRegistrationProps> = ({ t, handleClose }) => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { neutral } = theme.palette;

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      dispatch(login(true));
      handleClose();
      setSubmitting(false);
    }
  });

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } = formik;

  return (
    <form onSubmit={handleSubmit} aria-label="Registration form">
      <CustomInput
        name="name"
        label={t('name')}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && Boolean(errors.name)}
        touched={touched.name}
        mb={1}
        aria-label="Name input" />

      <CustomInput
        name="surname"
        label={t('surname')}
        value={values.surname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.surname && Boolean(errors.surname)}
        touched={touched.surname}
        mb={1}
        aria-label="Surname input"
      />

      <Box sx={{ mb: 0.8 }}>
        <Typography
          sx={{ mb: 0.5, fontSize: '12px', color: neutral.neutral1 }}
          aria-label="Mobile phone label"
        >
          {t('mobilePhone')}
        </Typography>
        <PhoneInput
          country="us"
          value={values.mobile}
          onChange={(phone: string) => formik.setFieldValue('mobile', phone)}
          placeholder="Mobile number"
          inputStyle={{
            width: '100%',
            height: '45px',
            borderRadius: '8px'
          }}
          aria-label="Mobile phone input"
        />
      </Box>

      <CustomInput
        name="workTitle"
        label={t('work title')}
        value={values.workTitle}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.workTitle && Boolean(errors.workTitle)}
        touched={touched.workTitle}
        mb={1}
        aria-label="Work title input"
      />

      <CustomInput
        name="company"
        label={t('company')}
        value={values.company}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.company && Boolean(errors.company)}
        touched={touched.company}
        mb={1}
        aria-label="Company input"
      />

      <CustomInput
        name="city"
        label={t('city')}
        value={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.city && Boolean(errors.city)}
        touched={touched.city}
        mb={3}
        aria-label="City input"
      />

      <Stack pb={1} direction="row" alignItems="center">
        <CustomCheckbox
          label={t('I agree to the')}
          checked={values.terms}
          onChange={handleChange}
          name="terms"
          colors={{ unchecked: 'base1.dark4' }}
          aria-label="terms checkbox"
        />
        <Typography variant="titleMd" color="base1.default" component={Link} href="/" pl={1}>
          {t('Terms & Conditions')}
        </Typography>
      </Stack>

      <Box pb={1}>
        <CustomCheckbox
          label={t('I want to receive marketing emails')}
          checked={values.marketing}
          onChange={handleChange}
          name="marketing"
          colors={{ unchecked: 'base1.dark4' }}
          aria-label="marketing email checkbox"
        />
      </Box>

      <CustomBtn
        type="submit"
        title={t("register")}
        variant="contained"
        loading={formik.isSubmitting}
        sx={{
          backgroundColor: 'accents.bubble1',
          width: '100%',
          opacity:
            Object.values(errors).some(Boolean)
              ? 0.5
              : 1
        }}
        aria-label="Register button"
      />
    </form>
  );
};

export default CompleteRegistration;
