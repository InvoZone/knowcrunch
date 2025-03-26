'use client';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import whyknowcrunch from '@/assets/home/whyKnowcrunch.webp';
import FeatureItem from './FeatureItem';
interface FeatureDataTypes {
  title: string;
  description: string;
}

const featureData: FeatureDataTypes[] = [
  {
    title: 'Expertise You Can Trust',
    description: 'Learn from industry leaders with a proven track record in digital training.'
  },
  {
    title: 'Learn What Matters Most',
    description: 'Focus on skills and strategies you can apply immediately.'
  },
  {
    title: 'Certifications That Add Value',
    description: 'Stay ahead with courses reflecting the latest digital trends.'
  },
  {
    title: 'Always Up-to-Date',
    description: 'Stay ahead with courses reflecting the latest digital trends.'
  },
  {
    title: 'Real Results',
    description: 'Designed to deliver measurable impact for professionals and businesses.'
  }
];

const WhyKnowcrunch = () => {
  return (
    <Container maxWidth="lg" component={'section'}>
      <Box
        sx={{ display: { xs: 'block', lg: 'flex' }, gap: { xs: '24px 16px', md: 6 } }}
        py={{ xs: 4, md: 6 }}
        px={{ xs: 0, md: 3, xl: 0 }}
      >
        <Box
          sx={{
            width: { xs: '100%', lg: 568, xl: 608 },
            height: { xs: 328, md: 471 },
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 4,
            display: 'flex',
            justifyContent: { xs: 'center' }
          }}
        >
          <Image
            className={'radius-16 object-fit'}
            src={whyknowcrunch}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            alt="why knowcrunch"
            loading="lazy"
            aria-label="why knowcrunch"
            title="why knowcrunch"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '16px',
            width: { xs: '100%', lg: 568, xl: 608 },
            mt: { xs: 0, lg: 'unset' },
            pt: { xs: 3, md: 6, lg: 0 }
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: 'base1.dark4',
              fontSize: '40px'
            }}
          >
            Why Knowcrunch?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {featureData.map((feature) => (
              <FeatureItem
                key={`feature_${feature.title}`}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default WhyKnowcrunch;
