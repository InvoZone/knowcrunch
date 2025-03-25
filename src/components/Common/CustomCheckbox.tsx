import { Checkbox, FormControlLabel } from '@mui/material';
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
        // Style customization for the checkbox label
        '& .MuiFormControlLabel-label': {
          color: 'neutral.neutral1',
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: '0.016px',
          lineHeight: '24px'
        }
      }}
      control={
        // Custom styled checkbox with ripple effect disabled
        <Checkbox
          disableRipple
          name={name}
          checked={checked}
          onChange={onChange}
          sx={{
            'color': colors?.unchecked ?? 'base1.dark4', // Unchecked color
            '&.Mui-checked': {
              color: colors?.checked ?? 'base1.default' // Checked color
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
