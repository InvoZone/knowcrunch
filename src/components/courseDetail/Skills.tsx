import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import type { FC } from 'react';

const Skills: FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const skills: string[] = [
    'Marketing strategy',
    'Social Media Management',
    'Data Analysis',
    'Photography',
    'Data Analysis',
    'Marketing strategy'
  ];

  const handleShowMore = (): void => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography component="h1" variant="h4" sx={{ color: 'base1.dark4', mb: 2 }}>
        Skills you’ll gain
      </Typography>
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          sx={{ gap: { xs: '8px', sm: '8px', md: '8px', lg: '16px' } }}
        >
          <TransitionGroup component={null}>
            {skills.slice(0, showMore ? skills.length : 4).map((item, index) => (
              <CSSTransition
                key={index}
                timeout={300}
                classNames={{
                  enter: 'skill-item-enter',
                  enterActive: 'skill-item-enter-active',
                  exit: 'skill-item-exit',
                  exitActive: 'skill-item-exit-active'
                }}
              >
                <Box
                  sx={{
                    'border': '1px solid',
                    'borderColor': 'base1.dark4',
                    'display': 'flex',
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'padding': '10px 16px',
                    'cursor': 'pointer',
                    'borderRadius': 8,
                    'width': 'max-content',
                    'height': '30px',
                    'backgroundColor': 'transparent',
                    'transition': 'opacity 300ms ease-in-out',
                    '&.skill-item-enter': { opacity: 0 },
                    '&.skill-item-enter-active': { opacity: 1 },
                    '&.skill-item-exit': { opacity: 1 },
                    '&.skill-item-exit-active': { opacity: 0 }
                  }}
                >
                  <Typography variant="titleMd" component={'h3'}>
                    {item}
                  </Typography>
                </Box>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{ cursor: 'pointer', mt: 2, color: 'base1.default' }}
        onClick={handleShowMore}
      >
        {showMore ? 'Show less' : 'Show more'}
      </Typography>
    </Box>
  );
};

export default Skills;
