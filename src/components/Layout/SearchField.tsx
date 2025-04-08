import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import type { FC } from 'react';

interface SearchFieldProps {
  handleClose: () => void;
}

const SearchField: FC<SearchFieldProps> = ({ handleClose }) => {
  return (
    <TextField
      id="input-with-icon-textfield"
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start" aria-label="Search Icon">
              <Image
                src={'/icons/header/search.svg'}
                width={24}
                height={24}
                alt={'searchIcon'}
                loading="lazy"
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" sx={{ cursor: 'pointer' }} aria-label="Cancel Icon">
              <Image
                src={'/icons/header/cross.svg'}
                width={24}
                height={24}
                alt={'cancelIcon'}
                onClick={handleClose}
                loading="lazy"
              />
            </InputAdornment>
          )
        }
      }}
      sx={{
        'minWidth': 310,
        'width': { xs: '100%', md: 310 },
        '& input': {
          color: 'secondary.main',
          fontSize: 16,
          fontWeight: 800
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 0,
            borderRadius: 0,
            borderBottomWidth: '1px',
            borderColor: 'base1.dark2'
          },
          '&:hover fieldset': {
            border: 0,
            borderRadius: 0,
            borderBottomWidth: '1px',
            borderColor: 'base1.dark2'
          },
          '&.Mui-focused fieldset': {
            border: 0,
            borderRadius: 0,
            borderBottomWidth: '1px',
            borderColor: 'base1.dark2'
          }
        }
      }}
      variant="outlined"
      aria-label="Search Field"
    />
  );
};

export default SearchField;
