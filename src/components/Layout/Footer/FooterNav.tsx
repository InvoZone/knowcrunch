'use client';
import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

interface FooterLinksProps {
  title: string;
  links: string[];
}
const HoverUnderlineLink = styled(Link)(() => ({
  'position': 'relative',
  'display': 'inline-block',
  'paddingBottom': '2px',
  'textDecoration': 'none',
  'color': '#fff',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '2px',
    backgroundColor: '#fff',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 300ms ease-in-out'
  },

  '&:hover::after': {
    transform: 'scaleX(1)'
  }
}));

const FooterLinks: FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 160 }}
      aria-label="Footer links section"
      component="ul"
    >
      <Typography
        variant="titleLg"
        sx={{ mb: 1.5, listStyleType: 'none' }}
        aria-label="Section title"
        component="li"
      >
        {title}
      </Typography>
      {links.map((link) => (
        <Typography
          key={link}
          component="li"
          sx={{ listStyleType: 'none' }}
          variant="titleMd"
          aria-label={`Link to ${link}`}
        >
          <HoverUnderlineLink href="/">{link}</HoverUnderlineLink>
        </Typography>
      ))}
    </Box>
  );
};

export default FooterLinks;
