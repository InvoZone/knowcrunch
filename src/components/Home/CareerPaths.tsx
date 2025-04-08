import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CourseCard from '../Common/CourseCard';
import TickMark from './TickMark';
import SelectableLinks from './SelectableLinks';
import CustomBtn from '../Common/CustomBtn';
import type { FC } from 'react';

const tickMarkData: { id: string; text: string }[] = [
  {
    id: '1',
    text: 'Design and manage influencer campaigns to enhance brand visibility and engagement.'
  },
  {
    id: '2',
    text: 'Expertise in social media, content trends, analytics, and influencer relationship-building.'
  },
  {
    id: '3',
    text: 'High demand across industries as brands prioritise influencer partnerships.'
  }
];

const CareerPath: FC = () => {
  return (
    <Box component={'section'} sx={{ backgroundColor: 'neutral.neutral10' }}>
      <Container maxWidth={'lg'}>
        <Box px={{ xs: 0, sm: 0, md: 3 }} py={{ xs: 4, md: 6 }}>
          <Typography variant="h2" color={'base1.dark4'} component="h2" pb={3}>
            Find your career path
          </Typography>
          <Box pb={2}>
            <SelectableLinks />
          </Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              gap: { xs: 1, md: 1, lg: 6 }
            }}
          >
            <Box sx={{ width: { xs: '100%', md: '50%', lg: 547, xl: 604 } }}>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  gap: '8px'
                }}
              >
                <Box
                  sx={{
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    px: { xs: 1, md: 2, lg: 3 },
                    py: { xs: 1, lg: 3 }
                  }}
                >
                  <Typography variant="h3" color="base1.dark4" pb={'4px'} component={'h3'}>
                    Content Marketing
                  </Typography>
                  <Typography variant="body" color="neutral.neutral1" pb={2}>
                    Define and develop digital strategies to deliver business growth through online
                    channels.
                  </Typography>
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        color: 'link.main',
                        pb: '4px'
                      }}
                    >
                      37.000€
                    </Typography>
                    <Typography variant="body" component={'p'} color="neutral.neutral1" pb={'12px'}>
                      median salary in Greece, for this career path in 2023
                    </Typography>
                  </Box>
                  <Box pb={'4px'}>
                    <Typography variant="h4" color="link.main">
                      85%
                    </Typography>
                    <Typography variant="body" color="neutral.neutral1" pb={2}>
                      of course graduates report positive career impact
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      color: 'neutral.neutral1',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      marginTop: '16px'
                    }}
                    component={'ul'}
                  >
                    {tickMarkData.map((item) => (
                      <TickMark key={item.id} text={item.text} />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: { xs: '100%', md: '50%', lg: 612 } }}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  py: { xs: 3, lg: 3 },
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  width: '100%'
                }}
              >
                <CourseCard tag={''} discountTag={true} width={'298px'} />
                <Box display={{ xs: 'none', lg: 'block' }}>
                  <CourseCard tag={'NEW'} discountTag={true} width={'298px'} />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  cursor: 'pointer'
                }}
              >
                <CustomBtn
                  color="link.main"
                  title={'View courses'}
                  txtVariant="h6"
                  variant="text"
                  type="link"
                  sx={{
                    'backgroundColor': 'transparent',
                    'position': 'relative',
                    'textTransform': 'none',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#3366cc',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 300ms ease-in-out'
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)'
                    }
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CareerPath;
