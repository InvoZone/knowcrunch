import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TickIcon from '../../../public/icons/tickCircle.svg';

interface TickMarkProps {
  text: string;
}

const TickMark: FC<TickMarkProps> = ({ text }) => {
  return (
    <Box component={'li'} sx={{ display: 'flex', gap: '6px' }}>
      <TickIcon />
      <Typography component={'p'} sx={{ listStyleType: 'none' }} variant="body">
        {text}
      </Typography>
    </Box>
  );
};

export default TickMark;
