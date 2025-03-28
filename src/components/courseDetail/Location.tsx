import type { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Location from '../../assets/course/locationDetail.webp';

const LocationInfo: FC = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: 'base1.dark4', mt: 3, mb: 2 }}>
        Location
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pr: 4, mb: 1 }}>
        <Image
          src="/icons/location.svg"
          width={24}
          height={24}
          loading="lazy"
          alt="Map of OTE Academy"
        />
        <Typography variant="h6" sx={{ color: 'base1.default' }}>
          OTE Academy - Πέλικα και Σπάρτης, Μαρούσι 151 22
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
        <Image
          src="/icons/locationinfo.svg"
          width={24}
          height={24}
          loading="lazy"
          alt="Map of OTE Academy info"
        />
        <Typography variant="body1" sx={{ color: 'tertiary.main' }}>
          Location description lorem ipsum dolor lorem ipsum
        </Typography>
      </Box>
      <Image src={Location} alt="Map of OTE Academy" layout="responsive" />
    </Box>
  );
};

export default LocationInfo;
