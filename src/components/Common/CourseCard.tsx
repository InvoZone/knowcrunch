import Typography from '@mui/material/Typography';
import Image from 'next/image';
import courseThumb from '@/assets/course/courseThumb.webp';
import Box from '@mui/material/Box';
import CustomBtn from './CustomBtn';
import TruncateText from './TruncateText';
import type { FC } from 'react';

interface CourseCardProps {
  enrollButton?: boolean;
  mx?: number;
  discountTag?: boolean;
  width?: string | number;
  shadow?: boolean;
  tag?: string;
}

const CourseCard: FC<CourseCardProps> = ({
  enrollButton = true,
  mx = 0,
  discountTag = false,
  width = '100%',
  shadow = false,
  tag
}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        borderRadius: 4,
        border: '1px solid',
        borderColor: 'neutral.neutral9',
        minHeight: 400,
        width,
        flexShrink: 0,
        boxShadow: shadow ? '0px 4px 4px 0px rgba(0, 0, 0, 0.15)' : 'none',
        mb: shadow ? 1 : 0
      }}
      p={1}
      mx={mx}
      aria-label="Course Card"
    >
      <Box
        sx={{
          width: '100%',
          height: 191,
          borderRadius: 2,
          position: 'relative'
        }}
        aria-label="Course Thumbnail"
      >
        <Box position={'absolute'} top={'40%'} left={'43%'} aria-label="Play Button">
          <Image
            src={'/icons/playBtn.webp'}
            height={50}
            width={50}
            alt="playBtnIcon"
            title="Play Button Icon"
            priority
          />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            justifyContent: tag ? 'space-between' : 'flex-end',
            width: '100%',
            p: 2
          }}
          aria-label="Best Seller Badge and Heart Icon"
        >
          <CustomBtn
            txtVariant={'body2'}
            title={tag}
            variant="contained"
            color={tag === 'NEW' ? 'secondary.main' : 'tertiary.main'}
            sx={{
              height: 24,
              backgroundColor: tag === 'NEW' ? 'base1.default' : 'accents.bubble1',
              borderRadius: 1,
              color: 'secondary.main',
              px: '5px',
              minWidth: '36px',
              display: tag ? 'flex' : 'none'
            }}
            aria-label="Best Seller Badge"
          />
          <Image
            src="/icons/heart.svg"
            height={24}
            width={24}
            alt="heart"
            title="Heart Icon"
            priority
            aria-label="Heart Icon"
          />
        </Box>
        <Image
          src={courseThumb}
          style={{ width: '100%', height: '100%', borderRadius: '8px' }}
          alt="course thumb"
          title="Course Thumbnail"
          priority
          aria-label="Course Thumbnail"
        />
      </Box>

      <Box height={146}>
        <TruncateText
          text={
            tag === 'NEW'
              ? 'Masterclass in Google Advertising and Masterclass in Google Advertising'
              : 'Masterclass in Google Advertising'
          }
          variant="titleLg"
          color="tertiary"
          component={'h3'}
          sx={{ pt: 1, mb: '4px' }}
          length={70}
        />

        <TruncateText
          text="An exceedingly advanced training program that provides comprehensive lectures"
          variant="body2"
          color="secondary.dark"
          component={'p'}
          sx={{ fontWeight: 400 }}
          length={100}
        />

        <Box display={'flex'} gap={0.5} aria-label="Course Metadata" pt={1}>
          <Box display={'flex'} alignItems={'center'} aria-label="Language Indicator">
            <Image
              src="/icons/course/glob.svg"
              alt="glob"
              width={20}
              height={20}
              title="Globe Icon"
              aria-label="Globe Icon"
            />
            <Typography variant="body" color="neutral.neutral2" pl={0.5} aria-label="Language">
              EN •
            </Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'} aria-label="Rating Display">
            <Image
              src="/icons/course/star.svg"
              alt="starIcon"
              width={20}
              height={20}
              title="Star Icon"
              priority
              aria-label="Star Icon"
            />
            <Typography variant="body" color="neutral.neutral2" pl={0.5} aria-label="Rating">
              4,5{' '}
              <Typography
                variant="body2"
                fontWeight={400}
                component={'span'}
                color="neutral.neutral2"
                aria-label="Rating Count"
              >
                (544)
              </Typography>{' '}
              •
            </Typography>
          </Box>
          <Box display={'flex'} alignItems={'center'} aria-label="Duration Display">
            <Image
              src="/icons/course/clock.svg"
              alt="clockIcon"
              width={20}
              height={20}
              title="Clock Icon"
              priority
              aria-label="Clock Icon"
            />
            <Typography variant="body" color="neutral.neutral2" pl={0.5} aria-label="Duration">
              25h
            </Typography>
          </Box>
        </Box>
      </Box>

      {enrollButton && (
        <Box aria-label="Enrollment Section">
          {discountTag && (
            <Box sx={{ display: 'flex' }}>
              <Typography
                variant="body2"
                color="error.main"
                pl={0.5}
                pb={0.5}
                aria-label="Discount Tag"
              >
                50%&nbsp; off &nbsp;
              </Typography>
              <Typography
                color="error.main"
                variant="body2"
                sx={{ textDecoration: 'line-through' }}
              >
                {' '}
                100 €
              </Typography>
            </Box>
          )}
          <CustomBtn
            title="Enrol 100€"
            sx={{ backgroundColor: 'base1.default', width: '100%' }}
            txtVariant="h6"
            color="secondary"
            aria-label="Enroll Button"
          />
        </Box>
      )}
    </Box>
  );
};

export default CourseCard;
