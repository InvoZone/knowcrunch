/* eslint-disable react/no-array-index-key */
'use client';
import type { FC } from 'react';
import { memo, useMemo, useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CourseCard from '../Common/CourseCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ArrowProps {
  onClick?: () => void;
  isDisabled: boolean;
  val?: number;
}

const Arrow: FC<ArrowProps> = memo(({ onClick, isDisabled, val }) => (
  <Box
    sx={{
      right: { xs: val || -20, sm: -20 },
      display: isDisabled ? 'none !important' : 'block !important',
      position: 'absolute',
      top: '40%',
      zIndex: '10',
      cursor: 'pointer'
    }}
  >
    <div onClick={onClick}>
      <Image src="/icons/nextArrow.svg" height={40} width={40} alt="nextArrow" />
    </div>
  </Box>
));
Arrow.displayName = 'Arrow';

const PrevArrow: FC<ArrowProps> = memo(({ onClick, isDisabled, val }) => (
  <Box
    sx={{
      left: { xs: val || -24, sm: -24 },
      display: isDisabled ? 'none !important' : 'block !important',
      position: 'absolute',
      top: '40%',
      zIndex: '10',
      cursor: 'pointer'
    }}
  >
    <div onClick={onClick}>
      <Image src="/icons/previousArrow.svg" height={40} width={40} alt="previousArrow" />
    </div>
  </Box>
));
PrevArrow.displayName = 'PrevArrow';

const AlsoLike: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<{ main: number }>({ main: 0 });
  const totalSlides = 6;

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: false,
      speed: 500,
      centerMode: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      beforeChange: (_oldIndex: number, newIndex: number) => {
        setCurrentSlide((prev) => ({ ...prev, main: newIndex }));
      },
      prevArrow: <PrevArrow isDisabled={currentSlide.main === 0} val={2} />,
      nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 4} val={-20} />,
      responsive: [
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 4} val={-20} />
          }
        },
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 1,
            nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 2.4} val={-20} />
          }
        },
        {
          breakpoint: 730,
          settings: {
            slidesToShow: 1.7,
            slidesToScroll: 1,
            nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 1.7} val={-20} />
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <Arrow isDisabled={currentSlide.main >= totalSlides - 1} val={-20} />
          }
        }
      ]
    }),
    [currentSlide.main]
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ color: 'base1.dark4', mb: 2 }}>
        You might also like
      </Typography>
      <Slider {...settings} className="sliderContaierCard">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <CourseCard key={index} width="auto" mx={1.3} />
        ))}
      </Slider>
    </Box>
  );
};

export default AlsoLike;
