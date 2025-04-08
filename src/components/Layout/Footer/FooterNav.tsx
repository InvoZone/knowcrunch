import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import styles from './footer.module.css';

interface FooterLinksProps {
  title: string;
  links: string[];
}

const FooterLinks: FC<FooterLinksProps> = ({ title, links }) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: 160 }}
      aria-label="Footer links section"
      component={'ul'}
    >
      <Typography
        variant="titleLg"
        sx={{
          mb: 1.5,
          listStyleType: 'none'
        }}
        aria-label="Section title"
        component={'li'}
      >
        {title}
      </Typography>
      {links.map((link) => (
        <Typography
          key={link}
          sx={{
            listStyleType: 'none'
          }}
          variant="titleMd"
          aria-label={`Link to ${link}`}
          component={'li'}
        >
          <Link href="/" className={styles.hover_underline}>
            {link}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};

export default FooterLinks;
