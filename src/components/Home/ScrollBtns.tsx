import { Box } from '@mui/material';
import Image from 'next/image';
import type { FC } from 'react';

interface ArrowPositionTypes {
  left?: { [key: string]: number | string } | string | number;
  top?: string | number;
  right?: { [key: string]: number | string } | string | number;
  bottom?: string | number;
}

interface ScrollBtnProps {
  onClick: () => void;
  src: string;
  alt: string;
  leftArrowPosition?: ArrowPositionTypes;
  rightArrowPosition?: ArrowPositionTypes;
}

const ScrollBtn: FC<ScrollBtnProps> = ({
  onClick,
  src,
  alt,
  leftArrowPosition,
  rightArrowPosition
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 1,
        border: '1px solid',
        borderColor: 'neutral.neutral2',
        borderRadius: 6,
        width: 40,
        height: 40,
        boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.15)',
        backgroundColor: 'secondary.main',
        cursor: 'pointer',
        ...leftArrowPosition,
        ...rightArrowPosition
      }}
      className="center"
      onClick={onClick}
      aria-label={alt}
    >
      <Image src={src} alt={alt} height={24} width={24} loading="lazy" title="arrow button" />
    </Box>
  );
};

export default ScrollBtn;
