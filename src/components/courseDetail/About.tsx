import type { FC } from 'react';
import { useState, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const About: FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleShowMore = useCallback(() => {
    setShowMore((prev) => !prev);
  }, []);

  const description = useMemo(
    () =>
      `An advanced training program that offers a comprehensive and thorough approach to the
      discovery, evaluation, booking, and monitoring of influencers. This program is designed to
      equip you with all the necessary strategies, tools, and practices required to excel in this${
        showMore ? '' : ' ...'
      }${showMore ? ' Here is the additional text that is revealed.' : ''}`,
    [showMore]
  );

  return (
    <Box sx={{ mb: 3 }}>
      <Typography component="h1" variant="h4" sx={{ color: 'base1.dark4', mb: 2 }}>
        About
      </Typography>
      <Typography component="p" sx={{ color: 'neutral.neutral1', mb: 2 }} variant="body">
        {description}
      </Typography>
      <Typography
        variant="h6"
        component="a"
        sx={{ cursor: 'pointer', mt: 2, color: 'base1.default' }}
        onClick={handleShowMore}
        aria-expanded={showMore}
      >
        {showMore ? 'Show less' : 'Show more'}
      </Typography>
    </Box>
  );
};

export default About;
