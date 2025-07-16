import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, CardContent, CardMedia, Box } from '@mui/material';
import styles from './ProductCard.module.css';
function ProductCard({ product }) {
  return (
    <>
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        className={styles['card']}
        to={`/product/${product.id}`}
      >
        <Grid size={{ xs: 2, sm: 4, md: 3 }}>
          <CardMedia
            sx={{ height: 300, width: 250 }}
            className={styles['image']}
            image={product.images[0]}
          />

          <CardContent sx={{ width: 200 }}>
            <Typography
              height="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={styles['price']}
            >
              {product.title}
              <br />
              Стоимость: {product.price}&#36;
            </Typography>
          </CardContent>
        </Grid>
      </Link>
    </>
  );
}
export default ProductCard;
