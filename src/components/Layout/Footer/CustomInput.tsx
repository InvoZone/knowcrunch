import type { FC, ChangeEvent, FocusEvent } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

interface CustomInputProps {
  name: string;
  value: string;
  handleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (_event: FocusEvent<HTMLInputElement>) => void;
  touched?: boolean;
  errors?: string;
  mb?: number | string;
  type?: string;
  placeholder?: string;
}

const CustomInput: FC<CustomInputProps> = ({
  name,
  value,
  handleChange,
  handleBlur,
  touched,
  errors,
  mb = 1,
  type = 'text',
  placeholder
}) => {
  return (
    <Stack>
      <TextField
        variant="outlined"
        name={name}
        type={type}
        value={value ?? ''}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched && Boolean(errors)}
        autoComplete={name}
        placeholder={placeholder}
        aria-label={`Input field for ${name}`}
        sx={{
          mb,
          '& input': {
            'height': 29,
            'color': 'base2.light4',
            'fontSize': 16,
            'fontWeight': 400,
            'padding': '8px 10px',
            'background': touched && Boolean(errors) ? '#EF978F54' : '#1C3870',
            '&::placeholder': {
              color: '#98C9FF',
              opacity: 1
            }
          },
          '& .MuiOutlinedInput-root': {
            'borderRadius': 2,
            'overflow': 'hidden',
            '& fieldset': {
              border: '0px solid'
            },
            '&:hover fieldset': {
              border: '0px solid'
            },
            '&.Mui-focused fieldset': {
              border: '0px solid'
            }
          }
        }}
      />
    </Stack>
  );
};

export default CustomInput;
