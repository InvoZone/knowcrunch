'use client';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CustomBtn from './CustomBtn';
import TruncateText from './TruncateText';
import type { FC } from 'react';
import HeartIcon from '../../../public/icons/heart.svg';
import LocationIcon from '../../../public/icons/course/locationicon.svg';
import CalendarIcon from '../../../public/icons/course/calendaricon.svg';
import GlobalIcon from '../../../public/icons/course/globalicon.svg';
import StarIcon from '../../../public/icons/course/staricon.svg';
import ClockHour from '../../../public/icons/course/clockhour.svg';

interface ClassroomCardProps {
  width?: { [key: string]: string | number } | string | number;
}

const ClassroomCard: FC<ClassroomCardProps> = ({ width = '100%' }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'neutral.neutral9',
        overflow: 'hidden',
        width,
        flexShrink: 0,
        background:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 79.7%), url(/icons/courseThumb.webp) lightgray 50% / cover no-repeat'
      }}
      p={2}
      aria-label="Classroom Card"
    >
      <Box
        sx={{
          width: '100%',
          height: { xs: 140, xl: 169 },
          borderRadius: 1,
          position: 'relative'
        }}
        aria-label="Course Thumbnail"
      >
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}
          aria-label="Best Seller Badge and Heart Icon"
        >
          <CustomBtn
            txtVariant={'body2'}
            title={'BEST SELLER'}
            variant="contained"
            color={'tertiary.main'}
            sx={{
              height: 24,
              backgroundColor: 'accents.bubble1',
              borderRadius: 1,
              color: 'secondary.main',
              px: '5px',
              minWidth: '36px',
              display: 'flex'
            }}
            aria-label="Best Seller Badge"
          />
          <HeartIcon />
        </Box>
      </Box>

      <Box height={206}>
        <Box display={'flex'} alignItems={'center'}>
          <LocationIcon />
          <Typography variant="body" color="secondary.main" pl={0.5}>
            Athens, GR
          </Typography>
        </Box>

        <TruncateText
          text="Masterclass in Digital Marketing, Athens"
          variant="h5"
          color="secondary.main"
          component={'h3'}
          length={48}
        />

        <TruncateText
          text="An exceedingly advanced training program that provides comprehensive lectures"
          variant="body2"
          color="secondary.main"
          component={'p'}
          length={90}
          sx={{ fontWeight: 400, pb: 1 }}
        />

        <Box
          display={'flex'}
          gap={0.5}
          sx={{ flexWrap: 'wrap' }}
          py={'13px'}
          aria-label="Course Metadata"
        >
          <Stack direction={'row'} alignItems={'center'}>
            <CalendarIcon />
            <Typography variant="body" color="secondary.main" pl={1}>
              January 2025 •
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <GlobalIcon />
            <Typography variant="body" color="secondary.main" pl={1}>
              EN •
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <StarIcon />
            <Typography variant="body" color="secondary.main" pl={1}>
              4.5{' '}
              <Typography
                variant="body2"
                fontWeight={400}
                component={'span'}
                color="secondary.main"
              >
                (544)
              </Typography>{' '}
              •
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} aria-label="Course Duration">
            <ClockHour />
            <Typography variant="body" color="secondary.main" pl={1}>
              139h
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Box>
        <CustomBtn
          title="Enrol 100€"
          variant="contained"
          sx={{ backgroundColor: 'base1.default', width: '100%' }}
          txtVariant="h6"
          color="secondary"
          aria-label="Enrollment Button"
        />
      </Box>
    </Box>
  );
};

export default ClassroomCard;
