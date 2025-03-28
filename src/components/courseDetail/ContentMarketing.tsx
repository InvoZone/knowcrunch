import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const About: FC = () => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          mb: 1
        }}
      >
        <Typography component="h1" variant="h4" sx={{ color: 'base1.dark4' }}>
          Content marketing
        </Typography>
        <Typography
          variant="body"
          sx={{
            color: 'neutral.neutral1',
            mt: -1.5
          }}
        >
          Define and develop digital strategies to deliver business growth through online channels.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            height: '60px',
            mt: -1
          }}
        >
          <Typography component="h2" variant="h5" sx={{ color: 'link.main' }}>
            37.000€
          </Typography>
          <Typography component="p" variant="body" sx={{ color: 'neutral.neutral1' }}>
            median salary in Greece, for this career path in 2023
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            height: '60px',
            mb: 1
          }}
        >
          <Typography component="h3" variant="h5" sx={{ color: 'link.main' }}>
            85%
          </Typography>
          <Typography component="p" variant="body" sx={{ color: 'neutral.neutral1' }}>
            of course graduates report positive career impact
          </Typography>
        </Box>

        <Box
          component="ul"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            color: 'neutral.neutral1',
            mt: 1,
            listStyleType: 'none',
            pl: 0
          }}
        >
          {[
            'Design and manage influencer campaigns to enhance brand visibility and engagement.',
            'Expertise in social media, content trends, analytics, and influencer relationship-building.',
            'High demand across industries as brands prioritise influencer partnerships.'
          ].map((item, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px'
              }}
            >
              <Image loading="lazy" src="/icons/tick.svg" width={24} height={24} alt="Tick" />
              <Typography variant="body" component="span">
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
