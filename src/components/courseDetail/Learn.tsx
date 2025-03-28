import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import type { FC } from 'react';

const Learn: FC = () => {
  return (
    <Box sx={{ marginTop: '32px', mb: 3 }}>
      <Typography component="h1" variant="h4" sx={{ color: 'base1.dark4', mb: 2 }}>
        What you’ll learn
      </Typography>
      <Grid2 container size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ display: 'flex' }}>
        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Box
            sx={{
              color: 'neutral.neutral1',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '8px',
              mt: 1,
              listStyleType: 'none'
            }}
            component="ul"
          >
            <Box
              sx={{
                display: 'flex',
                gap: '4px',
                alignItems: 'flex-start'
              }}
              component="li"
            >
              <Image loading="lazy" src="/icons/tick.svg" width={24} height={24} alt="Tick" />
              <Typography component="a" variant="body" sx={{ color: 'neutral.neutral1' }}>
                Unlock the secrets of SEO, social media, and email marketing to maximize your
                brand&apos;s online visibility and influence.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '4px',
                alignItems: 'flex-start'
              }}
              component="li"
            >
              <Image loading="lazy" src="/icons/tick.svg" width={24} height={24} alt="Tick" />
              <Typography component="a" variant="body" sx={{ color: 'neutral.neutral1' }}>
                Boost engagement, and drive measurable results.
              </Typography>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Box
            sx={{
              color: 'neutral.neutral1',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              padding: '8px',
              mt: 1,
              listStyleType: 'none'
            }}
            component="ul"
          >
            <Box
              sx={{
                display: 'flex',
                gap: '4px',
                alignItems: 'flex-start'
              }}
              component="li"
            >
              <Image loading="lazy" src="/icons/tick.svg" width={24} height={24} alt="Tick" />
              <Typography component="a" variant="body" sx={{ color: 'neutral.neutral1' }}>
                Learn to create impactful digital campaigns that deliver real results.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '4px',
                alignItems: 'flex-start'
              }}
              component="li"
            >
              <Image loading="lazy" src="/icons/tick.svg" width={24} height={24} alt="Tick" />
              <Typography component="a" variant="body" sx={{ color: 'neutral.neutral1' }}>
                Gain hands-on experience with cutting-edge digital tools and analytics to track
                performance.
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Learn;
