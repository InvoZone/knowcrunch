'use client';

import TextField from '@mui/material/TextField';
import { InputLabel, Stack, Typography } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';
import type { FormikProps } from 'formik';
import type { FC } from 'react';

// Define the props with a generic type <T>
interface CustomInputProps {
  label?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>;
  mb?: number;
  type?: string;
  placeholder?: string;
  slotProps?: TextFieldProps['slotProps'];
}

const CustomInput: FC<CustomInputProps> = ({
  label,
  name,
  formik,
  mb = 0,
  type = 'text',
  placeholder,
  slotProps
}) => {
  return (
    <Stack>
      {label && (
        <InputLabel aria-label={`Label for ${name}`}>
          <Typography color="neutral.neutral1" variant="body2" fontWeight={400} pb={0.5}>
            {label}
          </Typography>
        </InputLabel>
      )}

      <TextField
        variant="outlined"
        name={name}
        type={type}
        value={formik.values?.[name] as string | number | undefined} // Ensure type safety
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched?.[name] && Boolean(formik.errors?.[name])}
        autoComplete={name}
        placeholder={placeholder}
        aria-label={`Input field for ${name}`}
        slotProps={slotProps}
        sx={{
          mb,
          '& input': {
            height: 29,
            background:
              formik.touched?.[name] && Boolean(formik.errors?.[name]) ? '#EF978F54' : undefined,
            color: 'neutral.neutral2',
            fontSize: 16,
            fontWeight: 400,
            padding: '8px 10px'
          },
          '& .MuiOutlinedInput-root': {
            'borderRadius': 2,
            'overflow': 'hidden',
            '& fieldset': {
              border: '1px solid',
              borderColor: 'neutral.neutral7'
            },
            '&:hover fieldset': {
              border: '1px solid',
              borderColor: 'neutral.neutral7'
            },
            '&.Mui-focused fieldset': {
              border: '1px solid',
              borderColor: 'neutral.neutral7'
            }
          }
        }}
      />
    </Stack>
  );
};

export default CustomInput;
