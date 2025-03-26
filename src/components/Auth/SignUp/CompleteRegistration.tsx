'use client';

import CustomBtn from '@/components/Common/CustomBtn';
import CustomInput from '@/components/Common/CustomInput';
import { Box, Typography } from '@mui/material';
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

  // Initialize formik for form handling and validation
  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      dispatch(login(true));
      handleClose();
      setSubmitting(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} aria-label="Registration form">
      {/* Name input field */}
      <CustomInput
        name="name"
        label={t('name')}
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        touched={formik.touched.name}
        mb={1}
        aria-label="Name input" />

      {/* Surname input field */}
      <CustomInput
        name="surname"
        label={t('surname')}
        value={formik.values.surname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.surname && Boolean(formik.errors.surname)}
        touched={formik.touched.surname}
        mb={1}
        aria-label="Surname input"
      />

      {/* Mobile phone input field */}
      <Box sx={{ mb: 0.8 }}>
        <Typography
          sx={{ mb: 0.5, fontSize: '12px', color: neutral.neutral1 }}
          aria-label="Mobile phone label"
        >
          {t('mobilePhone')}
        </Typography>
        <PhoneInput
          country="us"
          value={formik.values.mobile}
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

      {/* Work title input field */}
      <CustomInput
        name="workTitle"
        label={t('work title')}
        value={formik.values.workTitle}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.workTitle && Boolean(formik.errors.workTitle)}
        touched={formik.touched.workTitle}
        mb={1}
        aria-label="Work title input"
      />

      {/* Company input field */}
      <CustomInput
        name="company"
        label={t('company')}
        value={formik.values.company}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.company && Boolean(formik.errors.company)}
        touched={formik.touched.company}
        mb={1}
        aria-label="Company input"
      />

      {/* City input field */}
      <CustomInput
        name="city"
        label={t('city')}
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.city && Boolean(formik.errors.city)}
        touched={formik.touched.city}
        mb={3}
        aria-label="City input"
      />

      {/* Terms and conditions checkbox */}
      <Box pb={1} className="centerY">
        <CustomCheckbox
          label={`${t('I agree to the')}`}
          checked={formik.values.terms}
          onChange={formik.handleChange}
          name="terms"
          colors={{ unchecked: 'base1.dark4' }}
          aria-label="terms checkbox"
        />
        <Typography variant="titleMd" color="base1.default" component={Link} href="/" pl={1}>
          {t('Terms & Conditions')}
        </Typography>
      </Box>

      {/* Marketing emails checkbox */}
      <Box pb={1}>
        <CustomCheckbox
          label={t('I want to receive marketing emails')}
          checked={formik.values.marketing}
          onChange={formik.handleChange}
          name="marketing"
          colors={{ unchecked: 'base1.dark4' }}
          aria-label="marketing email checkbox"
        />
      </Box>

      {/* Submit button for registration */}
      <CustomBtn
        type="submit"
        title="Register"
        variant="contained"
        loading={formik.isSubmitting}
        sx={{
          backgroundColor: 'accents.bubble1',
          width: '100%',
          opacity:
            !formik.values.name ||
              !formik.values.surname ||
              !formik.values.mobile ||
              !formik.values.workTitle ||
              !formik.values.company ||
              !formik.values.city ||
              !formik.values.terms
              ? 0.5
              : 1
        }}
        aria-label="Register button"
      />
    </form>
  );
};

export default CompleteRegistration;
