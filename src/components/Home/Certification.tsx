import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import certification from '@/assets/home/professional-diploma.webp';
import type { FC } from 'react';

const Certification: FC = () => {
  return (
    <Box component={'section'} sx={{ backgroundColor: 'neutral.neutral10' }}>
      <Container maxWidth={'xl'} sx={{ py: { xs: 4, md: 6 } }}>
        <Stack
          direction={'row'}
          sx={{
            justifyContent: 'center',
            columnGap: 6,
            maxWidth: 1136,
            rowGap: 3,
            px: { xs: 4, sm: 4, md: '58px', lg: 6 },
            margin: '0 auto',
            flexWrap: { xs: 'wrap', lg: 'unset' }
          }}
        >
          <Stack
            direction={'row'}
            sx={{
              width: { xs: 327, md: 358 },
              height: { xs: 237, md: 249 },
              position: 'relative',
              justifyContent: 'center'
            }}
          >
            <Image
              src={certification}
              alt="certification"
              title="certification"
              loading="lazy"
              priority={false}
              height={249}
              style={{ padding: '0rem 1rem' }}
              sizes="(max-width: 575px) 336px, (max-width: 1279px) 354px, 354px"
            />
          </Stack>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: { xs: 'center', lg: 'start' }
            }}
          >
            <Typography
              variant="h2"
              color="base1.dark4"
              component={'h2'}
              pb={2}
              pr={{ xs: 0, sm: 4 }}
              pl={{ xs: 0, sm: 0, md: 2, lg: 0 }}
            >
              Earn your professional certification or diploma
            </Typography>
            <Typography
              variant="body"
              color="neutral.neutral1"
              pr={{ xs: 1, sm: 2 }}
              pl={{ xs: 1, sm: 0 }}
            >
              Demonstrate your expertise with our professional certification options. Successfully
              pass exams to achieve a prestigious Professional Diploma or receive a Professional
              Certificate upon completing any of our other courses.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Certification;
