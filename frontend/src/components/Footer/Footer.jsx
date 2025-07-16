import React from 'react';
import { Stack, Typography } from '@mui/material';
import ScrollTopButton from '../../helpers/ScrollTopButton/ScrollTopButton.jsx';

function Footer() {
  return (
    <Stack
      component="footer"
      sx={{
        width: '42vw',
        paddingTop: 4,
        flexDirection: { sm: 'row' },
        justifyContent: { sm: 'center' },
        alignItems: { sm: 'center' },
        marginTop: 'auto',
      }}
    ></Stack>
  );
}

export default Footer;
