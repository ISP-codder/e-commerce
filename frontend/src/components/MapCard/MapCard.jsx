import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import styles from '../Header/Header.module.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
import ButtonBack from '../ButtonBack/ButtonBack.jsx';
import ScrollTopButton from '../../helpers/ScrollTopButton/ScrollTopButton.jsx';

function MapCard({ products, isLoading, isFetching, loaderRef, imageHref }) {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        width="90%"
      >
        <ButtonBack />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          width: '80vw',
          margin: '0 auto',
          marginTop: '10px',
        }}
      >
        <Grid
          container
          height="200px"
          spacing={{ xs: 2, sm: 8, md: 9 }}
          className={styles['main-part']}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default MapCard;
