import type { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TickMarkProps {
  text: string;
}

const TickMark: FC<TickMarkProps> = ({ text }) => {
  return (
    <Box component={'li'} sx={{ display: 'flex', gap: '6px' }}>
      <Image
        loading="lazy"
        src="/icons/tickCircle.svg"
        width={24}
        height={24}
        alt={'Tick'}
        title="Tick Icon"
      />
      <Typography component={'p'} sx={{ listStyleType: 'none' }} variant="body">
        {text}
      </Typography>
    </Box>
  );
};

export default TickMark;
