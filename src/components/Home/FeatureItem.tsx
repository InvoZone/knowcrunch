'use client';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { FC } from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px' }} component={'li'}>
      <Image
        loading="lazy"
        src="/icons/tickCircle.svg"
        width={24}
        height={24}
        alt="Tick"
        aria-label="Tick icon"
        title="tick"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '9px',
          listStyleType: 'none'
        }}
      >
        <Typography variant="titleLg" color="tertiary.main" aria-label={title} component={'p'}>
          {title}
        </Typography>
        <Typography variant="body" sx={{ color: 'neutral.neutral1' }} component={'p'}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeatureItem;
