'use client';
import { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollBtn from './ScrollBtn';
import { useTheme } from '@mui/material/styles';
import type { FC } from 'react';

interface MarketingOption {
  id: string;
  name: string;
}

const marketingOptions: MarketingOption[] = [
  { id: 'content-marketing', name: 'Content marketing' },
  { id: 'social-media-marketing', name: 'Social media marketing' },
  { id: 'social-engine-optimization', name: 'Social engine optimization' },
  { id: 'influencer-marketing', name: 'Influencer marketing' },
  { id: 'performance-marketing', name: 'Performance marketing' },
  { id: 'email-mobile-marketing', name: 'Email & mobile marketing' },
  { id: 'social-engine-optimization-2', name: 'Social engine optimization' },
  { id: 'marketing', name: 'Marketing' }
];

const SelectableLinks: FC = () => {
  const theme = useTheme();
  const scrollRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const isMed = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const xlg = useMediaQuery(theme.breakpoints.up('lg'));

  const handleScrollLeft = () => {
    const scrollAmount = xlg ? 400 : isMed ? 330 : 150;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollAmount;
    }
  };

  const handleScrollRight = () => {
    const scrollAmount = xlg ? 400 : isMed ? 330 : 150;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleSelect = (index: number) => () => {
    setSelected(index);
  };

  const updateArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setShowLeftArrow(scrollLeft > 0);

      setShowRightArrow(scrollLeft + 1 < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateArrows);

      updateArrows();

      return () => scrollContainer.removeEventListener('scroll', updateArrows);
    }
  }, []);

  return (
    <Box position="relative">
      {showLeftArrow && (
        <ScrollBtn
          leftArrowPosition={{
            top: '3px',
            left: { xs: '-15px', md: '-15px', lg: '-25px' }
          }}
          onClick={handleScrollLeft}
          src={'/icons/home/leftArrow.svg'}
          alt={'left scroll button'}
        />
      )}

      <Box
        ref={scrollRef}
        display="flex"
        flexDirection="row"
        sx={{
          'gap': '8px',
          'overflowX': 'auto',
          'scrollBehavior': 'smooth',
          '&::-webkit-scrollbar': { display: 'none' }
        }}
      >
        {marketingOptions.map((item, index) => (
          <Box
            sx={{
              color: index === selected ? 'base2.light6' : 'neutral.neutral1',
              border: '1px solid',
              borderColor: 'neutral.neutral1',
              display: 'flex',
              padding: '10px 16px',
              cursor: 'pointer',
              borderRadius: 8,
              width: '235px',
              height: '45px',
              backgroundColor: index === selected ? 'neutral.neutral1' : 'transparent'
            }}
            key={item?.id}
            onClick={handleSelect(index)}
            aria-label={`Select ${item?.name}`}
          >
            <Typography variant="titleSmall" component={'h3'} sx={{ width: 'max-content' }}>
              {item?.name}
            </Typography>
          </Box>
        ))}
      </Box>
      {showRightArrow && (
        <ScrollBtn
          rightArrowPosition={{
            top: '3px',
            right: { xs: '-15px', md: '-15px', lg: '-25px' }
          }}
          onClick={handleScrollRight}
          src={'/icons/home/rightArrow.svg'}
          alt={'right scroll button'}
        />
      )}
    </Box>
  );
};

export default SelectableLinks;
