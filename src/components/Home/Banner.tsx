'use client';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HeroImg1 from '@/assets/home/heropro.webp';
import HeroImg2 from '@/assets/home/HeroDesk.webp';
import HeroImg3 from '@/assets/home/Hero.webp';
import LeftAward from '../../../public/icons/home/leftaward.svg';
import RightAward from '../../../public/icons/home/rightaward.svg';
import BannerStar from '../../../public/icons/home/bannerstar.svg';

import type { FC } from 'react';

const Banner: FC = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));

  return (
    <Box
      component={'section'}
      sx={{ position: 'relative', borderRadius: '0px 0px 32px 32px', overflow: 'hidden' }}
    >
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
        <Image
          src={isSm ? HeroImg3 : isMd ? HeroImg2 : HeroImg1}
          alt="Hero Image"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Container maxWidth="xl" sx={{ py: 6, px: { xs: 3, md: 6 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 542, pt: 11 }}>
          <Typography variant="h1" sx={{ color: 'base2.light6', letterSpacing: 0 }}>
            Professional educational
            <br /> courses & training
          </Typography>
          <Typography variant="h4" sx={{ color: 'base2.light6', pb: 2 }} component={'h2'}>
            Knowcrunch helps you learn, transform and thrive.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center'
            }}
          >
            <Typography variant="h6" sx={{ color: 'secondary.main', mr: 0.5 }} component={'p'}>
              4.8
            </Typography>{' '}
            <BannerStar />
            <Typography
              variant="h6"
              sx={{ color: 'secondary.main', ml: 0.5, marginRight: '32px' }}
              component={'p'}
            >
              Trustpilot
            </Typography>{' '}
            <LeftAward />
            <Typography variant="h6" sx={{ color: 'secondary.main' }} component={'p'}>
              23 Awards
            </Typography>{' '}
            <RightAward />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
