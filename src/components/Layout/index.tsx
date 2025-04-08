import Box from '@mui/material/Box';
import Footer from './Footer';
import Navbar from './Navbar';
import ForgotPassword from '../Auth/ForgotPassword';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box aria-label="Application Layout">
      <Navbar aria-label="Navigation Bar" />
      <Box component={'main'} aria-label="Main Content">
        {children}
        <ForgotPassword aria-label="Forgot Password" />
      </Box>
      <Footer aria-label="Footer" />
    </Box>
  );
};

export default Layout;
