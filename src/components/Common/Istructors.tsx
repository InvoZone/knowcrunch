'use client';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { Box, Typography, useTheme } from '@mui/material';
import type { FC } from 'react';

interface ProfileCardProps {
  profileImage: string | StaticImageData;
  name: string;
  title: string;
  company: string;
  mx?: number;
  maxWidth?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  profileImage,
  name,
  title,
  company,
  mx = 0,
  maxWidth = '100%'
}) => {
  const theme = useTheme();
  const { neutral } = theme.palette;

  return (
    <Box
      sx={{
        borderRadius: '16px',
        border: '1px solid',
        borderColor: neutral.neutral8,
        minHeight: '366px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        maxWidth,
        width: '100%'
      }}
      p={1}
      mx={mx}
    >
      <Box
        sx={{
          width: '100%',
          borderRadius: '8px',
          overflow: 'hidden',
          position: 'relative',
          height: '100%'
        }}
      >
        <Image
          src={profileImage}
          alt="Profile Image"
          width={100}
          height={100}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          loading="lazy"
        />
      </Box>

      <Typography sx={{ color: '#000000', mb: 0.5 }} variant="h6" component="div" pt={1}>
        {name}
      </Typography>
      <Typography sx={{ color: neutral.neutral1, mb: 0.5 }} variant="body" color="text.secondary">
        {title}
      </Typography>
      <Typography sx={{ color: '#000000' }} variant="body" color="text.secondary" pb={1}>
        {company}
      </Typography>
    </Box>
  );
};

export default ProfileCard;
