import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeId } from '../../slices/addToCart.js';
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import styles from '../../components/ProductCard/ProductCard.module.css';
import { Link } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack/ButtonBack.jsx';
function Cart() {
  const cartItems = useSelector((state) => state.addToCartSlice.items);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.getItem('key');
  }, []);

  if (cartItems.length === 0) return <>Ваша корзина пуста</>;

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
          height="300px"
          container
          spacing={{ xs: 2, sm: 8, md: 7 }}
          className={styles['main-part']}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cartItems.map((item) => (
            <Grid key={item.id}>
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={`/product/${item.id}`}
              >
                <CardMedia
                  sx={{ height: 300, width: 250 }}
                  className={styles['image']}
                  image={item.image}
                />
                <CardContent
                  sx={{
                    height: 120,
                    width: 200,
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <Typography>
                    {item.title} <br /> {item.price} $ (×{item.quantity} шт.)
                  </Typography>
                  <Typography>
                    Стоимость: ${item.price * item.quantity}
                  </Typography>
                </CardContent>
              </Link>

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Button
                  variant="contained"
                  onClick={() => dispatch(removeId(item.id))}
                  style={{ backgroundColor: '#8643ce' }}
                >
                  Удалить
                </Button>
                <Button
                  style={{ backgroundColor: '#8643ce' }}
                  variant="contained"
                >
                  Купить
                </Button>
              </Box>
            </Grid>
          ))}
          <Grid />
        </Grid>
      </Box>
    </>
  );
}

export default Cart;
