// 'use client';
// import Image from 'next/image';
// import { Box, Typography, useTheme } from '@mui/material';
// import diploma from '@/assets/course/professional-diploma.webp';
// import styles from './diploma.module.scss';
// import type { FC } from 'react';

// interface DiplomaProps {
//   customStyle?: boolean;
//   variant?: 'h2' | 'h4';
//   heading?: string;
//   desp?: string;
// }

// const Diploma: FC<DiplomaProps> = ({ customStyle = false, variant = 'h2', heading, desp }) => {
//   const theme = useTheme();
//   const { base1, neutral } = theme.palette;

//   return (
//     <Box
//       className={styles.main}
//       sx={{
//         flexDirection: customStyle ? { xs: 'column', sm: 'column', md: 'column', lg: 'row' } : ''
//       }}
//     >
//       <Image className={styles.img} src={diploma} alt="diploma" />
//       <Box className={styles.typo} sx={{ textAlign: customStyle ? 'center' : '' }}>
//         <Typography component="h1" variant={variant} sx={{ color: base1.dark4 }}>
//           {heading || 'Earn your professional certification or diploma'}
//         </Typography>
//         <Typography component="p" variant="body" sx={{ color: neutral.neutral1 }}>
//           {desp ||
//             `Demonstrate your expertise with our professional certification options.
//             Successfully pass exams to achieve a prestigious Professional Diploma or
//             receive a Professional Certificate upon completing any of our other courses.`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Diploma;
'use client';
import Image from 'next/image';
import { Box, Typography, useTheme } from '@mui/material';
import diploma from '@/assets/course/professional-diploma.webp';
import type { FC } from 'react';

interface DiplomaProps {
  customStyle?: boolean;
  variant?: 'h2' | 'h4';
  heading?: string;
  desp?: string;
}

const Diploma: FC<DiplomaProps> = ({ customStyle = false, variant = 'h2', heading, desp }) => {
  const theme = useTheme();
  const { base1, neutral } = theme.palette;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '50px',
        alignItems: 'center',
        flexDirection: customStyle
          ? { xs: 'column', sm: 'column', md: 'column', lg: 'row' }
          : { xs: 'column', md: 'row' }
      }}
    >
      <Box
        sx={{
          width: { xs: 336, sm: 336, md: 354 },
          height: { xs: 237, sm: 237, md: 249 },
          flexShrink: 0
        }}
      >
        <Image
          src={diploma}
          alt="diploma"
          width={354}
          height={249}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          textAlign: customStyle ? 'start' : { xs: 'center', md: 'left' },
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        <Typography component="h1" variant={variant} sx={{ color: base1.dark4 }}>
          {heading || 'Earn your professional certification or diploma'}
        </Typography>
        <Typography component="p" variant="body" sx={{ color: neutral.neutral1 }}>
          {desp ||
            `Demonstrate your expertise with our professional certification options. 
            Successfully pass exams to achieve a prestigious Professional Diploma or 
            receive a Professional Certificate upon completing any of our other courses.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Diploma;
