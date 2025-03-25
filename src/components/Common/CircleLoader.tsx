import Box from '@mui/material/Box';
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';
import type { FC } from 'react';

interface CustomCircularProgressProps {
  size?: number;
}

function CustomCircularProgress({ size = 24 }: Readonly<CustomCircularProgressProps>) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={(theme) => ({
          color: 'tertiary',
          ...theme.applyStyles?.('dark', {
            color: 'blue'
          })
        })}
        size={size}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={(theme) => ({
          color: 'neutral.neutral8',
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round'
          },
          ...theme.applyStyles?.('dark', {
            color: '#308fe8'
          })
        })}
        size={size}
        thickness={4}
      />
    </Box>
  );
}

interface CircleLoaderProps {
  size?: number;
}

const CircleLoader: FC<CircleLoaderProps> = ({ size = 24 }) => {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1, pt: 1 }}>
      <CustomCircularProgress size={size} />
    </Stack>
  );
};

export default CircleLoader;
