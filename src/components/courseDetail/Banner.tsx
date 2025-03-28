// 'use client';
// import Image from 'next/image';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import useTheme from '@mui/material/styles/useTheme';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Grid2 from '@mui/material/Grid2';
// import styles from './banner.module.scss';
// import bannerImg from '@/assets/course/coursebanner.webp';
// import bannerImgmob from '@/assets/course/coursebannermob.webp';
// import bannerImgtab from '@/assets/course/coursebannertab.webp';
// import CustomBtn from '../Common/CustomBtn';
// import type { FC } from 'react';

// const Banner: FC = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

//   const imageSrc = isMobile ? bannerImgmob : isTablet ? bannerImgtab : bannerImg;

//   const imageSize = {
//     width: isMobile ? '100%' : isTablet ? 263 : 263.333,
//     height: isMobile ? 275 : isTablet ? 312 : 158
//   };

//   return (
//     <Box className={styles.main} sx={{ padding: '48px', backgroundColor: 'base1.dark4' }}>
//       <Container maxWidth="lg" sx={{ padding: '0 !important' }}>
//         <Grid2 container spacing={3} sx={{ display: 'flex', flexDirection: 'column' }}>
//           <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} className={styles.breadcrumb}>
//             <Typography variant="titleMd" sx={{ color: 'base1.light2' }}>
//               E-Learning Courses &gt;
//             </Typography>
//             <Typography variant="titleMd" sx={{ color: 'base1.light2' }}>
//               Influencer Marketing &gt;
//             </Typography>
//             <Typography variant="titleMd" sx={{ color: 'secondary.main' }}>
//               Masterclass in Influencer Marketing Strategy
//             </Typography>
//           </Grid2>
//           <Grid2
//             container
//             // spacing={3}
//             size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
//             sx={{
//               display: 'flex',
//               justifyContent: 'start'
//             }}
//           >
//             <Grid2 container size={{ xs: 12, sm: 4, md: 3, lg: 3 }}>
//               <Box
//                 className={styles.bannerImg}
//                 sx={{
//                   position: 'relative',
//                   width: imageSize.width,
//                   height: '100%',
//                   alignSelf: {
//                     sm: 'stretch'
//                   },
//                   overflow: 'hidden'
//                 }}
//               >
//                 <Image
//                   src={imageSrc}
//                   alt="bannerImg"
//                   height="100"
//                   style={{
//                     objectFit: 'cover',
//                     borderRadius: '8px',
//                     width: '100%'
//                   }}
//                   loading="lazy"
//                 />
//               </Box>
//             </Grid2>
//             <Grid2
//               container
//               spacing={2}
//               size={{ xs: 12, sm: 8, md: 9, lg: 9 }}
//               sx={{
//                 display: 'flex',
//                 flexDirection: 'column'
//               }}
//             >
//               <Grid2
//                 container
//                 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'baseline'
//                 }}
//               >
//                 <Grid2 size={{ xs: 9, sm: 9, md: 9, lg: 9 }}>
//                   <Typography
//                     variant="h3"
//                     sx={{
//                       color: 'secondary.main',
//                       paddingRight: isTablet ? '24px' : isMobile ? 0 : '10px'
//                     }}
//                   >
//                     Masterclass in Influencer Marketing Strategy
//                   </Typography>
//                 </Grid2>
//                 <Grid2
//                   size={{ xs: 3, sm: 3, md: 3, lg: 3 }}
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'flex-end',
//                     gap: '16px'
//                   }}
//                 >
//                   <Image
//                     src="/icons/heart.svg"
//                     alt="heart"
//                     style={{
//                       objectFit: 'cover'
//                     }}
//                     width={24}
//                     height={24}
//                     loading="lazy"
//                   />
//                   <Image
//                     width={24}
//                     height={24}
//                     src="/icons/shareicon.svg"
//                     alt="shareicon"
//                     style={{
//                       objectFit: 'cover'
//                     }}
//                     loading="lazy"
//                   />
//                 </Grid2>
//               </Grid2>
//               <Grid2
//                 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '16px'
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     color: 'neutral.neutral7',
//                     paddingRight: isTablet ? '20px' : isMobile ? 0 : '2px'
//                   }}
//                 >
//                   Self-paced online course – learn anytime, anywhere
//                 </Typography>
//                 <Box sx={{ gap: '16px', display: 'flex' }}>
//                   <CustomBtn
//                     txtVariant={'body2'}
//                     title={'BEST SELLER'}
//                     variant="contained"
//                     sx={{
//                       height: 24,
//                       backgroundColor: 'accents.bubble1',
//                       borderRadius: '4px',
//                       minHeight: '36px',
//                       minwidth: '36px !important',
//                       width: '78px !important',
//                       padding: '0 !important'
//                     }}
//                   />
//                   <CustomBtn
//                     txtVariant={'body2'}
//                     title={'New'}
//                     variant="contained"
//                     sx={{
//                       height: 24,
//                       backgroundColor: 'link.main',
//                       borderRadius: '4px',
//                       minwidth: '36px !important',
//                       width: '36px !important',
//                       padding: '0 !important'
//                     }}
//                   />
//                 </Box>
//                 <Box component={'div'} display={'flex'} gap={0.5} sx={{ flexWrap: 'wrap' }}>
//                   {/* Language indicator */}
//                   <Box component={'div'} display={'flex'} alignItems={'center'}>
//                     <Image src="/icons/global.svg" alt="glob" width={20} height={20} />
//                     <Typography variant="body" color="neutral.neutral7" pl={0.3}>
//                       EL{'\u00A0\u00A0\u00A0'}•
//                     </Typography>
//                   </Box>
//                   <Box component={'div'} display={'flex'} alignItems={'center'}>
//                     <Image
//                       src="/icons/staricons.svg"
//                       alt="starIcon"
//                       width={20}
//                       height={20}
//                       priority
//                     />
//                     <Typography variant="body" color="neutral.neutral7" pl={0.3}>
//                       4.5{'\u00A0\u00A0\u00A0'}•
//                     </Typography>
//                   </Box>
//                   <Box component={'div'} display={'flex'} alignItems={'center'}>
//                     <Image
//                       src="/icons/usericon.svg"
//                       alt="clockIcon"
//                       width={16}
//                       height={16}
//                       priority
//                     />
//                     <Typography variant="body" color="neutral.neutral7" pl={0.3}>
//                       876{'\u00A0\u00A0\u00A0'}•
//                     </Typography>
//                   </Box>
//                   <Box component={'div'} display={'flex'} alignItems={'center'}>
//                     <Image
//                       src="/icons/timeicon.svg"
//                       alt="starIcon"
//                       width={20}
//                       height={20}
//                       priority
//                     />
//                     <Typography variant="body" color="neutral.neutral7" pl={0.3}>
//                       25h{'\u00A0\u00A0\u00A0'}•
//                     </Typography>
//                   </Box>
//                   <Box component={'div'} display={'flex'} alignItems={'center'}>
//                     <Image
//                       src="/icons/diplomaicon.svg"
//                       alt="starIcon"
//                       width={20}
//                       height={20}
//                       priority
//                     />
//                     <Typography variant="body" color="neutral.neutral7" pl={0.3}>
//                       Professional Diploma
//                       {'\u00A0\u00A0\u00A0'}•
//                     </Typography>
//                   </Box>
//                   <Box component={'div'} display={'flex'} alignItems={'center'}>
//                     <Image
//                       src="/icons/keyicon.svg"
//                       alt="starIcon"
//                       width={20}
//                       height={20}
//                       priority
//                     />
//                     <Typography variant="body" color="neutral.neutral7" pl={0.3}>
//                       8 moths access{'\u00A0\u00A0\u00A0'}•
//                     </Typography>
//                   </Box>
//                   <Box component={'div'} display={'flex'} alignItems={'center'}>
//                     <Image
//                       src="/icons/Rotateicon.svg"
//                       alt="starIcon"
//                       width={20}
//                       height={20}
//                       priority
//                     />
//                     <Typography variant="body" color="neutral.neutral7" pl={0.3}>
//                       Last updated 23/01/2025
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid2>
//             </Grid2>
//           </Grid2>
//         </Grid2>
//       </Container>
//     </Box>
//   );
// };

// export default Banner;
'use client';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid2 from '@mui/material/Grid2';
import bannerImg from '@/assets/course/coursebanner.webp';
import bannerImgmob from '@/assets/course/coursebannermob.webp';
import bannerImgtab from '@/assets/course/coursebannertab.webp';
import CustomBtn from '../Common/CustomBtn';
import type { FC } from 'react';

const Banner: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const imageSrc = isMobile ? bannerImgmob : isTablet ? bannerImgtab : bannerImg;

  const imageSize = {
    width: isMobile ? '100%' : isTablet ? 302 : 302.333,
    height: isMobile ? 275 : isTablet ? 312 : 185
  };

  return (
    <Box
      sx={{
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'space-between',
        gap: '50px',
        alignItems: 'center',
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '32px',
        paddingTop: '160px !important',
        backgroundColor: 'base1.dark4',
        [theme.breakpoints.down('sm')]: {
          padding: '24px !important'
        },
        [theme.breakpoints.down(1360)]: {
          maxWidth: '100%'
        }
      }}
    >
      <Container maxWidth="lg" sx={{ padding: '0 !important' }}>
        <Grid2 container spacing={3} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid2
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{
              display: 'flex',
              gap: '2px',
              flexWrap: 'wrap',
              listStyleType: 'none'
            }}
            component="ol"
            aria-label="Breadcrumb"
          >
            <Typography component="li" variant="titleMd" sx={{ color: 'base1.light2' }}>
              E-Learning Courses &gt;
            </Typography>
            <Typography component="li" variant="titleMd" sx={{ color: 'base1.light2' }}>
              Influencer Marketing &gt;
            </Typography>
            <Typography component="li" variant="titleMd" sx={{ color: 'secondary.main' }}>
              Masterclass in Influencer Marketing Strategy
            </Typography>
          </Grid2>
          <Grid2
            container
            size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
            sx={{
              display: 'flex',
              justifyContent: 'start'
            }}
          >
            <Grid2 container size={{ xs: 12, sm: 4, md: 3, lg: 3 }}>
              <Box
                sx={{
                  'position': 'relative',
                  'width': imageSize.width,
                  'height': '185px',
                  'alignSelf': {
                    sm: 'stretch'
                  },
                  'overflow': 'hidden',
                  '& img': {
                    [theme.breakpoints.between('sm', 'md')]: {
                      maxWidth: '100% !important',
                      height: 'auto !important'
                    }
                  }
                }}
              >
                <Image
                  src={imageSrc}
                  alt="bannerImg"
                  height="185"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '8px',
                    width: '100%'
                  }}
                  loading="lazy"
                />
              </Box>
            </Grid2>
            <Grid2
              container
              spacing={2}
              size={{ xs: 12, sm: 8, md: 9, lg: 9 }}
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Grid2
                container
                size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                sx={{
                  display: 'flex',
                  alignItems: 'baseline'
                }}
              >
                <Grid2 size={{ xs: 9, sm: 9, md: 9, lg: 9 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'secondary.main',
                      paddingRight: isTablet ? '24px' : isMobile ? 0 : '10px'
                    }}
                    component="h1"
                  >
                    Masterclass in Influencer Marketing Strategy
                  </Typography>
                </Grid2>
                <Grid2
                  size={{ xs: 3, sm: 3, md: 3, lg: 3 }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '16px'
                  }}
                >
                  <Image
                    src="/icons/heart.svg"
                    alt="heart"
                    style={{
                      objectFit: 'cover',
                      cursor: 'pointer'
                    }}
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                  <Image
                    width={24}
                    height={24}
                    src="/icons/shareicon.svg"
                    alt="shareicon"
                    style={{
                      objectFit: 'cover',
                      cursor: 'pointer'
                    }}
                    loading="lazy"
                  />
                </Grid2>
              </Grid2>
              <Grid2
                size={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: 'neutral.neutral7',
                    paddingRight: isTablet ? '20px' : isMobile ? 0 : '2px'
                  }}
                  component="p"
                >
                  Self-paced online course – learn anytime, anywhere
                </Typography>
                <Box sx={{ gap: '16px', display: 'flex' }}>
                  <CustomBtn
                    txtVariant={'body2'}
                    title={'BEST SELLER'}
                    variant="contained"
                    sx={{
                      height: 24,
                      backgroundColor: 'accents.bubble1',
                      borderRadius: '4px',
                      minHeight: '24px',
                      minWidth: '78px !important',
                      width: '78px !important',
                      padding: '5px !important'
                    }}
                  />
                  <CustomBtn
                    txtVariant={'body2'}
                    title={'NEW'}
                    variant="contained"
                    color="#fff"
                    sx={{
                      height: 24,
                      backgroundColor: 'link.main',
                      borderRadius: '4px',
                      minWidth: '36px !important',
                      width: '36px !important',
                      padding: '0 !important'
                    }}
                  />
                </Box>
                <Box component={'div'} display={'flex'} gap={0.5} sx={{ flexWrap: 'wrap' }}>
                  <Box component={'div'} display={'flex'} alignItems={'center'}>
                    <Image src="/icons/global.svg" alt="glob" width={20} height={20} />
                    <Typography variant="body" color="neutral.neutral7" pl={0.3}>
                      GREEK{'\u00A0\u00A0\u00A0'}•
                    </Typography>
                  </Box>
                  <Box component={'div'} display={'flex'} alignItems={'center'}>
                    <Image
                      src="/icons/staricons.svg"
                      alt="starIcon"
                      width={20}
                      height={20}
                      priority
                    />
                    <Typography variant="body" color="neutral.neutral7" pl={0.3}>
                      4.5{'\u00A0\u00A0\u00A0'}•
                    </Typography>
                  </Box>
                  <Box
                    sx={{ cursor: 'pointer' }}
                    component={'div'}
                    display={'flex'}
                    alignItems={'center'}
                  >
                    <Image
                      src="/icons/usericon.svg"
                      alt="clockIcon"
                      width={16}
                      height={16}
                      priority
                    />
                    <Typography variant="body" color="neutral.neutral7" pl={0.3}>
                      876{'\u00A0\u00A0\u00A0'}•
                    </Typography>
                  </Box>
                  <Box component={'div'} display={'flex'} alignItems={'center'}>
                    <Image
                      src="/icons/timeicon.svg"
                      alt="starIcon"
                      width={20}
                      height={20}
                      priority
                      style={{ cursor: 'pointer' }}
                    />
                    <Typography variant="body" color="neutral.neutral7" pl={0.3}>
                      25h{'\u00A0\u00A0\u00A0'}•
                    </Typography>
                  </Box>
                  <Box component={'div'} display={'flex'} alignItems={'center'}>
                    <Image
                      src="/icons/diplomaicon.svg"
                      alt="starIcon"
                      width={20}
                      height={20}
                      priority
                    />
                    <Typography variant="body" color="neutral.neutral7" pl={0.3}>
                      Professional Diploma
                      {'\u00A0\u00A0\u00A0'}•
                    </Typography>
                  </Box>
                  <Box component={'div'} display={'flex'} alignItems={'center'}>
                    <Image
                      src="/icons/keyicon.svg"
                      alt="starIcon"
                      width={20}
                      height={20}
                      priority
                    />
                    <Typography variant="body" color="neutral.neutral7" pl={0.3}>
                      8 moths access{'\u00A0\u00A0\u00A0'}•
                    </Typography>
                  </Box>
                  <Box component={'div'} display={'flex'} alignItems={'center'}>
                    <Image
                      src="/icons/Rotateicon.svg"
                      alt="starIcon"
                      width={20}
                      height={20}
                      priority
                    />
                    <Typography variant="body" color="neutral.neutral7" pl={0.3}>
                      Last updated 23/01/2025
                    </Typography>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Banner;
