import PageContainer from "@/components/Common/PageContainer";
import Courses from "@/components/Courses";
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  title: 'Knowcrunch - Professional digital marketing courses & training',
  description:
    'Knowcrunch is offering high-level professional digital & social media marketing training & education in a class or via video-on-demand e-learning.',
  canonical: '/',
  image: '/icons/Hero.webp'
});

const CoursesPage = () => {
  return <PageContainer><Courses /></PageContainer>;
};

export default CoursesPage;