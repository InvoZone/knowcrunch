'use client';
import { Box, Typography, Container } from '@mui/material';
import 'react-phone-input-2/lib/style.css';
import FooterLinks from './FooterNav';
import FooterLinksMobile from './MobileFooterNav';

import appStore from '@/assets/footer/appStore.webp';
import googlePlay from '@/assets/footer/googlePlay.webp';
import FaceBook from '@/assets/footer/facebook.svg';
import Instagram from '@/assets/footer/instagram.svg';
import Linkedin from '@/assets/footer/linkedin.svg';
import Youtube from '@/assets/footer/youtube.svg';
import TikTok from '@/assets/footer/tikTok.svg';
import Medium from '@/assets/footer/medium.svg';
import Pinterest from '@/assets/footer/pinterest.svg';
import Spotify from '@/assets/footer/spotify.svg';
import X from '@/assets/footer/x.svg';
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';
import { useTranslations } from 'next-intl';
import styles from './footer.module.css';
import type { FC } from 'react';

interface FooterSection {
  title: string;
  links: string[];
}

const Footer: FC = () => {
  const t = useTranslations('footer');
  const footerData: FooterSection[] = [
    {
      title: 'About Us',
      links: [
        'E-Learning Courses',
        'Classroom Courses',
        'Corporate Training',
        'Brands that Trust Us',
        'Instructors',
        'Blog'
      ]
    },
    {
      title: 'Our Students',
      links: ['Questions & Answers', 'Official Alumni Group', 'Digital Nation Group']
    },
    {
      title: 'Legal',
      links: ['Terms & Conditions', 'Cookies Policy', 'Data Privacy Policy', 'Contact Us']
    }
  ];

  return (
    <Box
      component="footer"
      className="centerX"
      sx={{
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        backgroundColor: 'primary.main',
        color: 'secondary.main'
      }}
    >
      <Container sx={{ maxWidth: '1408px !important' }}>
        <Box pt={{ xs: 4, lg: 6 }} pb={{ xs: 3, md: 2 }} px={{ xs: 1, md: 3 }}>
          {/* Mobile Navigation Links */}
          <Box component="nav" sx={{ display: { xs: 'block', lg: 'none' }, pb: { xs: 3, md: 5 } }}>
            {footerData.map((section) => (
              <FooterLinksMobile key={section.title} title={section.title} links={section.links} />
            ))}
          </Box>

          <Box
            display="flex"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            gap={6}
            flexWrap="wrap"
          >
            {/* Newsletter Subscription Section */}
            <Box sx={{ width: { xs: 352, md: 290 } }}>
              <Typography variant="titleLg" component={'p'} pb={3}>
                {t('getOurNews')}
              </Typography>
              <NewsletterForm />
              <Typography variant="body1" pt={1}>
                {t('respectPersonalData')}
                <Typography
                  variant="body1"
                  component="a"
                  sx={{
                    'color': 'accents.bubble1',
                    'pl': '3px',
                    'cursor': 'pointer',
                    'position': 'relative',
                    'textDecoration': 'none',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -2,
                      width: '0%',
                      height: '2px',
                      backgroundColor: 'currentColor',
                      transition: 'width 0.3s ease-in-out'
                    },
                    '&:hover::after': {
                      width: '100%'
                    }
                  }}
                >
                  {t('dataPrivacyPolicy')}
                </Typography>
                .
              </Typography>
            </Box>

            {/* Footer Links for Desktop View */}
            <Box
              component="nav"
              sx={{
                display: { xs: 'none', lg: 'flex' },
                justifyContent: 'space-between',
                gap: 4,
                width: 540
              }}
            >
              {footerData.map((section) => (
                <FooterLinks key={section.title} title={section.title} links={section.links} />
              ))}
            </Box>

            {/* App Download Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: { xs: '100%', md: 181 },
                alignItems: { xs: 'center', md: 'flex-start' }
              }}
            >
              <Typography variant="titleLg" component={'p'}>
                Download Knowcrunch
              </Typography>
              <Image
                width={134}
                height={45}
                loading="lazy"
                src={appStore}
                alt="appstore"
                title={'appstore'}
                style={{ cursor: 'pointer' }}
              />
              <Image
                width={134}
                height={45}
                loading="lazy"
                src={googlePlay}
                alt="googleplay"
                title={'googleplay'}
                style={{ cursor: 'pointer' }}
              />
            </Box>
          </Box>

          {/* Footer Bottom Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', lg: 'flex-end' },
              pt: 4,
              borderBottom: '2px solid',
              borderColor: 'base1.default'
            }}
          >
            <Typography variant="body1" pb={'14px'}>
              Knowcrunch Inc., 2035 Sunset Lake Road, Delaware, USA
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              justifyContent: { xs: 'center', md: 'space-between' },
              alignItems: 'center',
              pt: '14px'
            }}
          >
            <Typography
              variant="body1"
              sx={{ textAlign: { xs: 'center', md: 'left' }, pb: { xs: 3, md: 0 } }}
            >
              Knowcrunch Inc. © {new Date().getFullYear()} All Rights Reserved
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
                px: { xs: 1, md: 0 }
              }}
            >
              <FaceBook className={styles.footerIcon} />
              <Instagram className={styles.footerIcon} />
              <Linkedin className={styles.footerIcon} />
              <Youtube className={styles.footerIcon} />
              <TikTok className={styles.footerIcon} />
              <Medium className={styles.footerIcon} />
              <Pinterest className={styles.footerIcon} />
              <Spotify className={styles.footerIcon} />
              <X className={styles.footerIcon} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
