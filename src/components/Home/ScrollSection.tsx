import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import ScrollBtn from './ScrollBtn';
import CustomBtn from '../Common/CustomBtn';
import type { FC, ReactNode } from 'react';

interface ArrowPositionTypes {
  left?: { [key: string]: number | string } | string | number;
  top?: string | number;
  right?: { [key: string]: number | string } | string | number;
  bottom?: string | number;
}

interface ScrollSectionProps {
  scrollAmount?: number | null;
  children: ReactNode;
  width?: { [key: string]: string };
  leftArrowPosition?: ArrowPositionTypes;
  rightArrowPosition?: ArrowPositionTypes;
  heading: string;
  sectionPadding?: { [key: string]: number | string };
  linkProps?: { title: string; pt?: number; pb?: number };
}

const ScrollSection: FC<ScrollSectionProps> = ({
  scrollAmount = null,
  children,
  width,
  leftArrowPosition = { top: '44%', left: 10 },
  rightArrowPosition = { top: '44%', right: 10 },
  heading,
  sectionPadding = { xs: 4, md: 6 },
  linkProps = { title: '', pt: 2 }
}) => {
  const scrollRef = useRef<HTMLElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (direction: string) => {
    const scroll = scrollAmount ?? 644;

    if (scrollRef.current) {
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= scroll;
      } else {
        scrollRef.current.scrollLeft += scroll;
      }
    }
  };

  const updateArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
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
    <Box component="section" p={sectionPadding}>
      <Container maxWidth="lg">
        <Typography
          color="primary.main"
          pb={3}
          variant={'h2'}
          component="h2"
          sx={{
            fontSize: {
              xs: heading === 'Popular E-learning Courses' ? '28px' : '32px',
              sm: '40px'
            }
          }}
        >
          {heading}
        </Typography>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '1360px'
          }}
        >
          {showLeftArrow && (
            <ScrollBtn
              onClick={() => handleScroll('left')}
              src={'/icons/home/leftArrow.svg'}
              alt={'left scroll button'}
              leftArrowPosition={leftArrowPosition}
            />
          )}

          <Box
            ref={scrollRef}
            sx={{
              'overflowX': 'auto',
              'display': 'flex',
              'gap': 3,
              'scrollBehavior': 'smooth',
              'whiteSpace': 'nowrap',
              '&::-webkit-scrollbar': { display: 'none' },
              'width': width || {
                xs: 'calc(100% - 60px)',
                md: 'calc(100% - 150px)',
                lg: 'calc(100% - 40px)'
              }
            }}
          >
            {children}
          </Box>

          {showRightArrow && (
            <ScrollBtn
              onClick={() => handleScroll('right')}
              src={'/icons/home/rightArrow.svg'}
              alt={'right scroll button'}
              rightArrowPosition={rightArrowPosition}
            />
          )}
        </Box>
        <Box
          pt={linkProps?.pt}
          pb={linkProps?.pb}
          sx={{
            display: linkProps?.title ? 'flex' : 'none',
            justifyContent: 'flex-end',
            cursor: 'pointer'
          }}
        >
          <CustomBtn
            color="link.main"
            title={linkProps?.title}
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
      </Container>
    </Box>
  );
};

export default ScrollSection;
