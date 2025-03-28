import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import img3 from '@/assets/course/instructor3.webp';
import type { FC } from 'react';

const Testimonial: FC = () => {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        padding: '16px',
        display: 'flex',
        gap: '8px',
        border: '1px solid',
        borderColor: 'neutral.neutral9',
        borderRadius: '16px'
      }}
    >
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <Image
          src={img3}
          alt="Testimonial1"
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '90.5px',
            objectFit: 'cover'
          }}
          loading="lazy"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <Box sx={{ display: 'flex' }}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Image
                key={index}
                src="/icons/starrate.svg"
                width={24}
                height={24}
                loading="lazy"
                alt="starrate"
              />
            ))}
          </Box>
          <Typography variant="titleMd" sx={{ color: 'neutral.neutral1' }}>
            Maria Karapanagioti
          </Typography>
          <Typography variant="body1" sx={{ color: 'tertiary.main' }}>
            Digital Marketing Specialist
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '8px' }}>
            {['Facebookt', 'Instagramt', 'Linkedint', 'xIcont'].map((icon, index) => (
              <Image
                key={index}
                src={`/icons/${icon}.svg`}
                width={20}
                height={20}
                loading="lazy"
                alt={icon}
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Typography sx={{ color: 'neutral.neutral1' }} variant="subtitleSm">
        Being taught by professionals who are so passionate about what they do and eager to transmit
        their knowledge and as much information and tips as they can, is such a wonderful and
        inspirational experience. KnowCrunch gave us a strong basis to understand just how big the
        digital world is and all the potential within it. This course was such an insight into how
        much more there is behind and beyond our engagement with the social media, our activity and
        our transactions on the web. And such a powerful tool for those who seek to advance their
        skills and knowledge and excel in their business. A hands-on approach, by a united and
        inspiring team, that will keep you going till the end!
      </Typography>
    </Box>
  );
};

export default Testimonial;
