import type { FC } from 'react';
import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface FooterAccordionProps {
  title: string;
  links: string[];
}

const FooterAccordion: FC<FooterAccordionProps> = ({ title, links }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (): void => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, pb: 1 }}>
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        aria-label={`Accordion for ${title}`}
        sx={{
          'backgroundColor': 'transparent',
          'border': 'none',
          'boxShadow': 'none',
          '&:last-of-type': {
            backgroundColor: 'transparent',
            border: 'none',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          },
          '&.Mui-expanded:last-of-type': {
            backgroundColor: 'transparent'
          }
        }}
      >
        <AccordionSummary
          expandIcon={
            <Image
              loading="lazy"
              src="/icons/expandmore.svg"
              width={24}
              height={24}
              alt="Expand More"
              title="Expand More"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          aria-label={`Expand ${title}`}
          sx={{
            'borderBottom': '1px solid',
            'borderColor': 'base1.dark2',
            'padding': 0,
            'backgroundColor': 'transparent',
            'minHeight': '40px !important',
            '& .MuiAccordionSummary-content': {
              margin: '8px 0 !important'
            }
          }}
        >
          <Typography
            variant="titleLg"
            component="li"
            sx={{
              color: 'secondary.main',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              listStyleType: 'none'
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          aria-label={`Details for ${title}`}
          sx={{
            backgroundColor: 'transparent',
            padding: '8px 0'
          }}
        >
          <Box component="ul">
            {links.map((link) => (
              <Typography
                key={link}
                component="li"
                variant="titleMd"
                color="secondary.main"
                sx={{ listStyleType: 'none' }}
                pb={1}
              >
                <Link href={'/'}> {link} </Link>
              </Typography>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FooterAccordion;
