import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { Box, Container } from '@mui/material';

function Layout() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
