"use client";

import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, pt: { xs: 8, md: 10 } }}>
        {children}
      </Box>
      <Box 
        component="footer" 
        sx={{ 
          py: 4, 
          backgroundColor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} Venym Labs. All rights reserved.
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
