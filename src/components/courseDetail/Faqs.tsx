/* eslint-disable react/no-array-index-key */
'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { FC } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: FC = () => {
  const faqs: FAQItem[] = [
    {
      question: 'Are there any prerequisites necessary for this digital marketing training?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      question: 'I have little to no knowledge in digital marketing, can I attend your courses?',
      answer: 'Yes, our courses are designed for all levels of experience.'
    },
    {
      question: 'Can I take this course at any time?',
      answer: 'Yes, you can enroll in our courses at any time.'
    },
    {
      question: 'How much do courses cost?',
      answer: 'The cost of courses varies; please check our pricing page for details.'
    },
    {
      question: 'How may I use my certificate?',
      answer: 'You can use your certificate to showcase your skills to potential employers.'
    }
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ color: 'base1.dark4', mb: 2, mt: 3 }}>
        FAQ
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            boxShadow: 'none !important',
            borderRadius:
              index === 0
                ? '16px 16px 0 0 !important'
                : index === faqs.length - 1
                  ? '0 0 16px 16px !important'
                  : '0',
            border: '1px solid',
            borderColor: 'neutral.neutral9',
            margin: '0 0 -1px 0 !important',
            padding: '8px 0px'
          }}
        >
          <AccordionSummary
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              gap: '8px'
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <Typography sx={{ color: 'base1.dark4' }} variant="titleMd">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '0 48px' }}>
            <Typography variant="body1" sx={{ color: 'neutral.neutral1' }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Typography
        variant="h6"
        sx={{
          marginTop: 2,
          cursor: 'pointer',
          color: 'base1.default',
          display: 'flex',
          justifyContent: 'start'
        }}
      >
        Do you have more questions?
      </Typography>
    </Box>
  );
};

export default FAQ;
