'use client';

import { memo } from 'react';
import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Certification from './Certification';
import WhyKnowcrunch from './WhyKowcrunch';
import ScrollSection from './ScrollSection';
import CourseCard from '../Common/CourseCard';
import ClassroomCard from '../Common/ClassroomCard';
import InstructorCard from '../Common/InstructorCard';
import VideoCard from '../Common/VideoCard';
import Banner from './Banner';
import LogoAnimate from './LogoAnimate';
import CareerPath from './CareerPaths';

import instructorImg1 from '@/assets/instructor/instructor1.webp';
import instructorImg2 from '@/assets/instructor/instructor2.webp';
import instructorImg3 from '@/assets/instructor/instructor3.webp';

interface Instructor {
  img: string;
  title: string;
  company: string;
  name: string;
}

const instructors: Instructor[] = [
  {
    img: instructorImg1 as unknown as string,
    title: 'CEO',
    company: '@Knowcrunch',
    name: 'Tolis Aivalis'
  },
  {
    img: instructorImg2 as unknown as string,
    title: 'Managing Director',
    company: 'Olive Creative Marketing House',
    name: 'Elia Balta'
  },
  {
    img: instructorImg3 as unknown as string,
    title: 'Founder',
    company: '@Content Studio',
    name: 'Christina Dehola'
  },
  {
    img: instructorImg2 as unknown as string,
    title: 'Managing Director',
    company: 'Olive Creative Marketing House',
    name: 'Elia Balta'
  },
  {
    img: instructorImg1 as unknown as string,
    title: 'CEO',
    company: '@Knowcrunch',
    name: 'Tolis Aivalis'
  },
  {
    img: instructorImg3 as unknown as string,
    title: 'Founder',
    company: '@Content Studio',
    name: 'Christina Dehola'
  }
];

function renderCourseCard(index: number) {
  return (
    <CourseCard
      key={index}
      discountTag={true}
      width={298}
      shadow={true}
      tag={index % 2 === 0 ? 'NEW' : 'BEST SELLER'}
    />
  );
}

function renderClassroomCard(index: number) {
  return <ClassroomCard key={index} width={{ xs: 298, lg: 378.66, xl: 405 }} />;
}

function renderInstructorCard(instructor: Instructor, index: number) {
  return <InstructorCard key={index} height={366} width={260} {...instructor} />;
}

function renderVideoCard(index: number) {
  return <VideoCard key={index} width={368} />;
}

const Home = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const isMed = useMediaQuery(theme.breakpoints.down('lg'));
  const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const xlg = useMediaQuery(theme.breakpoints.up('xl'));

  const getScrollAmount = (small: number, med: number, lg: number, xl: number) => {
    if (isSmall) return small;
    if (isMed) return med;
    if (isLg) return lg;
    if (xlg) return xl;
    return small;
  };

  function renderScrollSection({
    heading,
    children,
    small,
    med,
    lg,
    xl,
    top,
    left,
    right,
    linkTitle = 'View all',
    sectionPadding,
    width
  }: {
    heading: string;
    children: ReactNode;
    small: number;
    med: number;
    lg: number;
    xl: number;
    top?: string;
    left?: { [key: string]: string };
    right?: { [key: string]: string };
    linkTitle?: string;
    sectionPadding?: { [key: string]: string };
    width: { [key: string]: string };
  }) {
    return (
      <ScrollSection
        width={width}
        scrollAmount={getScrollAmount(small, med, lg, xl)}
        leftArrowPosition={{ top: top ?? '44%', left: { ...left } }}
        rightArrowPosition={{ top: top ?? '44%', right: { ...right } }}
        heading={heading}
        linkProps={{ title: linkTitle, pt: 1, pb: 3 }}
        sectionPadding={sectionPadding}
      >
        {children}
      </ScrollSection>
    );
  }

  return (
    <Box>
      <Banner />
      <Box component="section" sx={{ marginTop: '-30px', px: { xs: 3, md: 6 } }}>
        <LogoAnimate />
      </Box>

      {renderScrollSection({
        heading: 'Popular E-learning Courses',
        children: [...Array(6)].map((_, ind) => renderCourseCard(ind)),
        small: 322,
        med: 644,
        lg: 966,
        xl: 1288,
        top: '44%',
        left: { xs: '-6px', md: '-30px' },
        right: { xs: '-6px', md: '-30px' },
        linkTitle: 'View all courses',
        sectionPadding: { xs: '24px 0px 8px 0px', md: '24px 24px 24px 24px' },
        width: { xs: '300px', md: '100%' }
      })}

      <CareerPath />

      {renderScrollSection({
        heading: 'Classroom Courses',
        children: [...Array(12)].map((_, ind) => renderClassroomCard(ind)),
        small: 322,
        med: 644,
        lg: 804,
        xl: 858,
        top: '190px',
        left: { xs: '-6px', md: '-30px' },
        right: { xs: '-6px', md: '-30px' },
        linkTitle: 'View courses',
        sectionPadding: { xs: '32px 0px 8px 0px', md: '48px 24px 24px 24px' },
        width: { xs: '300px', md: '100%' }
      })}

      {renderScrollSection({
        heading: 'Our Instructors',
        children: instructors.map((instructor, index) => renderInstructorCard(instructor, index)),
        small: 284,
        med: 568,
        lg: 1136,
        xl: 1136,
        top: '163px',
        left: { xs: '-16px', md: '-30px' },
        right: { xs: '-16px', md: '-30px' },
        linkTitle: 'View all instructors',
        sectionPadding: { xs: '32px 0px 8px 0px', md: '48px 24px 24px 24px' },
        width: { xs: '361px', md: '100%' }
      })}

      {renderScrollSection({
        heading: 'Video Testimonials',
        children: [...Array(12)].map((_, ind) => renderVideoCard(ind)),
        small: 392,
        med: 392,
        lg: 784,
        xl: 1176,
        top: '94px',
        left: { xs: '-16px', md: '-30px' },
        right: { xs: '-16px', md: '-30px' },
        linkTitle: '',
        sectionPadding: { xs: '32px 0px', md: '32px 24px' },
        width: { xs: '390px', md: '100%' }
      })}

      <Certification />
      <WhyKnowcrunch />
    </Box>
  );
};

export default memo(Home);
