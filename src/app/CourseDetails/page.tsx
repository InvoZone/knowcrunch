import Course from '@/components/CourseDetail';
import type { FC } from 'react';

interface MetadataImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface Metadata {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: MetadataImage[];
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
}

export const metadata: Metadata = {
  title: 'Course Details',
  description: 'Masterclass in Influencer Marketing Strategy',
  openGraph: {
    title: 'Masterclass in Influencer Marketing Strategy',
    description: 'Masterclass in Influencer Marketing Strategy',
    url: 'https://yoursite.com/page',
    siteName: 'KnowCrunch',
    images: [
      {
        url: 'https://yoursite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image Description'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Masterclass in Influencer Marketing Strategy',
    description: 'Masterclass in Influencer Marketing Strategy',
    images: ['https://yoursite.com/twitter-image.jpg']
  }
};

const CoursesPage: FC = () => {
  return <Course />;
};

export default CoursesPage;
