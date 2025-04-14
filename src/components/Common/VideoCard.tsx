'use client';
import Box from '@mui/material/Box';
import videoThumb from '@/assets/testimonial/videoThumb.webp';
import Image from 'next/image';
import type { FC } from 'react';

interface VideoCardProps {
  width?: string | number;
  height?: string | number;
}

const VideoCard: FC<VideoCardProps> = ({ width = '100%', height = '100%' }) => {
  const boxStyles = {
    position: 'relative',
    flexShrink: 0,
    width,
    height,
    minWidth: width
  };

  const playButtonStyles = {
    position: 'absolute',
    left: '42%',
    top: '37%'
  };

  const imageWidth = typeof window !== 'undefined' && window.innerWidth < 360 ? 255 : 368;
  return (
    <Box sx={boxStyles}>
      <Box sx={playButtonStyles}>
        <Image
          src={'/icons/playBtn.webp'}
          height={64}
          width={64}
          alt="playBtnIcon"
          loading="lazy"
          aria-label="Play button"
          title="Play button"
        />
      </Box>
      <Box borderRadius={4}>
        <Image
          src={videoThumb}
          alt="video img"
          height={228}
          width={imageWidth}
          style={{ borderRadius: '16px', objectFit: 'cover' }}
          aria-label="Video thumbnail"
          title="Video thumbnail"
        />
      </Box>
    </Box>
  );
};

export default VideoCard;
