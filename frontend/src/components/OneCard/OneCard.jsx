import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/productApi.js';
import Loading from '../../helpers/Loading/Loading.jsx';
import ErrorElement from '../../helpers/ErrorElement/ErrorElement.jsx';
import { Alert, Box, Button, Typography } from '@mui/material';
import styles from './OneCard.module.css';
import { Link } from 'react-router-dom';
import ButtonBack from '../ButtonBack/ButtonBack.jsx';
import { useDispatch } from 'react-redux';
import { addId } from '../../slices/addToCart.js';
import Snackbar from '@mui/material/Snackbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function OneCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetProductQuery(id);
  const [mainImage, setMainImage] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const changeMainImage = (event) => {
    setMainImage(event.target.id);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addId({
        id: data.id,
        title: data.title,
        price: data.price,
        image: data.images[1],
      }),
    );

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(data));
  }, [openSnackbar]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorElement />;

  return (
    <Box className={styles['center-block']}>
      <Box className={styles['card-box']}>
        <Box className={styles['left-box']}>
          <Box className={styles['images']}>
            <img
              id={0}
              className={styles['image']}
              src={data.images[0]}
              onClick={changeMainImage}
              alt={`Картинка товара: ${data.title}`}
            />
            <img
              id={1}
              className={styles['image']}
              src={data.images[1]}
              onClick={changeMainImage}
              alt={`Картинка товара: ${data.title}`}
            />
            <img
              id={2}
              className={styles['image']}
              src={data.images[2]}
              onClick={changeMainImage}
              alt={`Картинка товара: ${data.title}`}
            />
          </Box>
          <Box width="10%">
            <img
              style={{ width: '300px' }}
              src={data.images[mainImage]}
              alt={`Картинка товара: ${data.title}`}
            />
          </Box>
        </Box>
        <Box width="50%" height="100%">
          <Box className={styles['button']}>
            <ButtonBack />
          </Box>

          <Box width="100%">
            <Typography variant="h4">{data.title}</Typography>

            <Button style={{ backgroundColor: '#8943c6' }} variant="contained">
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={`/${data.category.name.toLowerCase()}`}
              >
                {data.category.name}
              </Link>
            </Button>
          </Box>
          <Box>
            <Typography variant="h6" lineHeight="30px">
              {data.description}
            </Typography>
          </Box>
          <Box className={styles['bottom-part-of-card']}>
            <Typography variant="h6">
              Price: <span className={styles['price']}> {data.price} $ </span>
            </Typography>

            <Button
              style={{ backgroundColor: '#8643ce', color: 'white' }}
              variant="contained"
              onClick={() => handleAddToCart()}
            >
              <AddShoppingCartIcon /> Добавить в корзину
            </Button>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{ width: '100%', backgroundColor: '#8643ce', color: 'white' }}
          icon={<CheckCircleIcon sx={{ color: 'white' }} />}
        >
          Товар "{data.title}" добавлен в корзину!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default OneCard;
