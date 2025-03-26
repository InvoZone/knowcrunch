'use client';

import TextField from '@mui/material/TextField';
import { InputLabel, Stack, Typography } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';
import type { ChangeEvent, FC, FocusEvent } from 'react';

interface CustomInputProps {
  label?: string;
  name: string;
  value: string;
  onChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (_event: FocusEvent<HTMLInputElement>) => void;
  error: boolean | undefined;
  touched: boolean | undefined;
  mb?: number;
  type?: string;
  placeholder?: string;
  slotProps?: TextFieldProps['slotProps'];
}

const CustomInput: FC<CustomInputProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
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
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        autoComplete={name}
        placeholder={placeholder}
        aria-label={`Input field for ${name}`}
        slotProps={slotProps}
        sx={{
          mb,
          '& input': {
            height: 29,
            background: touched && error ? '#EF978F54' : undefined,
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
