'use client';
import CustomBtn from '@/components/Common/CustomBtn';
import styles from './paymentCard.module.scss';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid2 from '@mui/material/Grid2';
import EnrolCard from '../Common/EnrolCard';
import type { FC, SyntheticEvent } from 'react';
import { useState } from 'react';

type CourseDetailProps = object;

const CourseDetail: FC<CourseDetailProps> = () => {
  const [value, setValue] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [participantEmails, setParticipantEmails] = useState<string[]>(['', '']);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCourseSelect = (course: string) => {
    setSelectedCourse(course);
  };

  return (
    <Box>
      <Box
        sx={{
          padding: 2,
          backgroundColor: 'secondary.main',
          borderRadius: '16px',
          border: '1px solid',
          borderColor: 'neutral.neutral8',
          boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            'display': 'flex',
            'justifyContent': 'space-between',
            'padding': '0px 24px !important',
            '& .MuiTabs-flexContainer': {
              justifyContent: 'space-between',
              borderBottom: '2px solid',
              borderColor: 'neutral.neutral8'
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'base1.default'
            },
            '& .MuiTab-root': {
              color: 'black',
              width: '150px',
              margin: '0'
            },
            '& .Mui-selected': {
              color: '#3366cc', // Change the color to red when a tab is active
              fontWeight: 'bold'
            }
          }}
        >
          <Tab label="Individual" sx={{ marginRight: '40px' }} />
          <Tab label="Team" />
        </Tabs>
        {value === 0 ? (
          <Grid2
            container
            spacing={1}
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <EnrolCard
              course="Regular"
              price={550}
              ticketsLeft={23}
              selectedCourse={selectedCourse}
              handleCourseSelect={handleCourseSelect}
            />
            <EnrolCard
              course="Student/Unemployed"
              price={450}
              ticketsLeft={7}
              selectedCourse={selectedCourse}
              handleCourseSelect={handleCourseSelect}
            />
            <EnrolCard
              course="Zoom"
              price={250}
              ticketsLeft={54}
              selectedCourse={selectedCourse}
              handleCourseSelect={handleCourseSelect}
            />
          </Grid2>
        ) : (
          <Box sx={{ marginTop: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Typography sx={{ color: 'neutral.neutral1' }} variant="body1" align="center">
                For groups (2+ people)
              </Typography>
              <Typography
                variant="h2"
                align="center"
                sx={{ color: 'base1.dark4', marginBottom: 1 }}
              >
                450€
              </Typography>
              <Typography
                variant="h6"
                align="center"
                sx={{ marginBottom: 0.5, color: 'base1.dark4' }}
              >
                per participant
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{ marginBottom: 2, color: 'base1.dark4' }}
              >
                7 tickets left
              </Typography>
            </Box>
            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}
            >
              {participantEmails.map((email, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px'
                  }}
                >
                  <input
                    type="email"
                    placeholder="Participant Email"
                    required
                    value={email}
                    className={styles.inputCard}
                    onChange={(e) => {
                      const newEmails = [...participantEmails];
                      newEmails[index] = e.target.value;
                      setParticipantEmails(newEmails);
                    }}
                  />
                  {index > 1 && (
                    <Image
                      loading="lazy"
                      src="/icons/delete.svg"
                      width={24}
                      height={24}
                      alt="Delete"
                      onClick={() => {
                        const newEmails = participantEmails.filter((_, i) => i !== index);
                        setParticipantEmails(newEmails);
                      }}
                      style={{
                        cursor: 'pointer',
                        marginLeft: '8px',
                        paddingRight: '5px'
                      }}
                    />
                  )}
                </Box>
              ))}
              <Typography
                sx={{
                  color: 'base1.default',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setParticipantEmails([...participantEmails, '']);
                }}
              >
                Add another participant
              </Typography>

              <CustomBtn
                type="button"
                title={'Enroll now'}
                variant="contained"
                color="base2.light6"
                // onClick={handleLogin}
                sx={{
                  border: '1px solid transparent',
                  // borderColor: "base1.default",
                  width: '100%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  borderRadius: '8px',
                  height: '45px',
                  backgroundColor: 'base1.default'
                }}
              />
              <Typography sx={{ color: 'secondary.dark' }} variant="body1" align="center">
                Up to 2 monthly installments
              </Typography>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            color: 'neutral.neutral1',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '8px',
            mt: 1
          }}
        >
          <Typography variant="h6" sx={{ color: 'base1.dark4' }}>
            INCLUDES
          </Typography>

          <Box
            className={styles.tickMark}
            sx={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center'
            }}
          >
            <Image loading="lazy" src="/icons/tick.svg" width={18} height={18} alt={'Tick'} />
            <Typography variant="titleMd" sx={{ color: 'neutral.neutral1' }}>
              Lifetime alumni discounts
            </Typography>
          </Box>
          <Box
            className={styles.tickMark}
            sx={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center'
            }}
          >
            <Image loading="lazy" src="/icons/tick.svg" width={18} height={18} alt={'Tick'} />
            <Typography variant="titleMd" sx={{ color: 'neutral.neutral1' }}>
              Access to our instructors
            </Typography>
          </Box>
          <Box
            className={styles.tickMark}
            sx={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center'
            }}
          >
            <Image loading="lazy" src="/icons/tick.svg" width={18} height={18} alt={'Tick'} />
            <Typography variant="titleMd" sx={{ color: 'neutral.neutral1' }}>
              24h access to videos & files
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 1
          }}
        >
          <Typography sx={{ color: 'base1.default', cursor: 'pointer' }} variant="body1">
            Available in Premium Plan
          </Typography>
        </Box>
      </Box>
      <CustomBtn
        type="button"
        title={'Buy as a Gift'}
        variant="contained"
        color="base1.default"
        // onClick={handleLogin}
        startIcon={
          <Image src="/icons/store.svg" width={18} height={24} loading="lazy" alt="google" />
        }
        sx={{
          border: '1px solid',
          borderColor: 'base1.default',
          width: '100%',
          mb: 2,
          display: 'flex',
          alignItems: 'flex-start',
          borderRadius: '8px',
          background: 'transparent',
          outline: 'none',
          boxShadow: 'unset',
          mt: 2
        }}
      />
    </Box>
  );
};

export default CourseDetail;
