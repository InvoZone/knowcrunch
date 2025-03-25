'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Box, Typography, Container } from '@mui/material';
import type { FC } from 'react';
interface Logo {
  id: string;
  src: string;
  title: string;
}

const logos: Logo[] = [
  { id: 'skoda', src: '/icons/home/skodalogo.svg', title: 'Skoda Logo' },
  { id: 'emirate', src: '/icons/home/emiratelogo.svg', title: 'Emirate Logo' },
  { id: 'audi', src: '/icons/home/audilogo.svg', title: 'Audi Logo' },
  { id: 'ingroup', src: '/icons/home/ingrouplogo.svg', title: 'Ingroup Logo' },
  { id: 'volk', src: '/icons/home/volklogo.svg', title: 'Volk Logo' },
  { id: 'dd', src: '/icons/home/ddlogo.svg', title: 'DD Logo' },
  { id: 'knowcrunch', src: '/icons/home/knowcrunchlogo.svg', title: 'Knowcrunch Logo' },
  { id: 'pepsi', src: '/icons/home/pepsilogo.svg', title: 'Pepsi Logo' },
  { id: 'sarantis', src: '/icons/home/sarantislogo.svg', title: 'Sarantis Logo' },
  { id: 'trained', src: '/icons/home/trainedlogo.svg', title: 'Trained Logo' },
  { id: 'volk2', src: '/icons/home/volklogo.svg', title: 'Volk Logo' },
  { id: 'dd2', src: '/icons/home/ddlogo.svg', title: 'DD Logo' }
];

const LogoAnimate: FC = () => {
  return (
    <Container
      sx={{ padding: '0 !important', position: 'relative', maxWidth: '1360px' }}
      aria-label="Logo animation container"
    >
      <Box
        sx={{
          width: '82px',
          height: '50px',
          background: 'linear-gradient(90deg, #FFF 90%, rgba(255, 255, 255, 0.00) 100%)',
          position: 'absolute',
          left: {
            xs: '30px',
            sm: '48px',
            md: '50px',
            lg: '60px'
          },
          top: '4px',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          variant="titleMd"
          sx={{ width: '90px', color: 'base1.dark4', lineHeight: '20px' }}
        >
          Trusted by
        </Typography>
      </Box>
      <Box
        sx={{
          padding: {
            xs: '4px 8px 4px 16px',
            sm: '4px 48px',
            md: '4px 48px 4px 60px',
            lg: '4px 48px 4px 60px',
            xl: '4px 48px 4px 75px'
          },
          display: 'flex',
          backgroundColor: 'secondary.main',
          alignItems: 'center',
          justifyContent: 'start',
          border: '1px solid',
          borderColor: 'neutral.neutral9',
          borderRadius: '48px',
          height: '58px'
        }}
      >
        <Marquee
          play={true}
          speed={100}
          direction={'left'}
          loop={0}
          style={{ paddingLeft: '40px', marginLeft: '40px', marginRight: '10px' }}
          // onCycleComplete={onCycleComplete}
        >
          {logos?.map((item) => (
            <Box
              key={item?.id}
              sx={{
                padding: {
                  xs: '0 6px',
                  sm: '0 16px',
                  md: '0 20px',
                  lg: '0 24px'
                }
              }}
            >
              <Image
                width={50}
                height={50}
                loading="lazy"
                src={item?.src}
                alt={`logo-${item?.id}`}
                aria-label={`Logo for ${item?.id}`}
                title={item?.title}
              />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Container>
  );
};

export default LogoAnimate;
