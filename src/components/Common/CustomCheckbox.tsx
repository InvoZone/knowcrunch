import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { ChangeEvent, FC } from 'react';

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  colors?: {
    checked?: string;
    unchecked?: string;
  };
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ label, checked, onChange, name, colors }) => {
  return (
    <FormControlLabel
      sx={{
        'height': 32,
        'mr': 0,
        '& .MuiFormControlLabel-label': {
          color: 'neutral.neutral1',
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: '0.016px',
          lineHeight: '24px'
        }
      }}
      control={
        <Checkbox
          disableRipple
          name={name}
          checked={checked}
          onChange={onChange}
          sx={{
            'color': colors?.unchecked ?? 'base1.dark4',
            '&.Mui-checked': {
              color: colors?.checked ?? 'base1.default'
            }
          }}
          aria-label={`Toggle ${label}`}
        />
      }
      label={label}
      aria-label={`Checkbox for ${label}`}
    />
  );
};

export default CustomCheckbox;
