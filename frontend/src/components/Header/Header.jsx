import React, { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  List,
  Icon,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';
import LoginIcon from '@mui/icons-material/Login';
import styles from './Header.module.css';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { handleDrawerToggle } from '../../slices/drawer.js';
import { CATEGORIES, iconComponents } from '../../constants/constants.js';
import SearchProducts from '../../SearchProducts/SearchProducts.jsx';
import Badge from '@mui/material/Badge';
import { purple } from '@mui/material/colors';
function Header() {
  const color = pink[200];

  const state = useSelector((state) => state.drawerSlice.isOpen);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addToCartSlice.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const Icon = ({ itemImg }) => {
    const IconComponent = iconComponents[itemImg];
    return <IconComponent />;
  };

  return (
    <Box
      className={styles['color']}
      display="flex"
      alignItems="center"
      sx={{
        width: '100vw',
        margin: '0 auto',
        height: '10vh',
      }}
    >
      <Box
        width="20%"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Link style={{ textDecoration: 'none' }} to="/">
          <Typography className={styles['logo-link']}>WebBerries</Typography>
        </Link>
        <Button color="black" onClick={() => dispatch(handleDrawerToggle())}>
          <MenuIcon
            sx={{
              width: '55px',
              height: '55px',
              color: '#f6f0f0',
              border: '.1px solid #f6f0f0',
              borderRadius: '25%',
            }}
            fontSize="large"
          />
        </Button>
        <Drawer open={state} onClose={() => dispatch(handleDrawerToggle())}>
          <List>
            {CATEGORIES.map((el) => (
              <Link
                style={{ textDecoration: 'none', color: 'black' }}
                key={el.title}
                color="warning"
                to={el.url}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon itemImg={el.icon} />
                    </ListItemIcon>
                    <ListItemText primary={el.title} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
      </Box>
      <Box
        width="50%"
        sx={{
          '& > :not(style)': {
            color: '#d4d4d5',
            backgroundColor: 'white',
            borderRadius: '10px',
          },
        }}
        autoComplete="off"
      >
        <SearchProducts />
      </Box>
      <Box
        width="20%"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Link className={styles['links']} to="/cart">
          <ShoppingCartIcon />{' '}
          <Badge
            badgeContent={totalItems}
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#cc0c0c',
                color: 'white',
              },
            }}
          >
            Корзина
          </Badge>{' '}
        </Link>
        <Link className={styles['links']} to="/profile">
          <PersonIcon /> <Typography>профиль </Typography>{' '}
        </Link>
        <Link className={styles['links']} to="/cart">
          <LoginIcon /> <Typography>выйти </Typography>{' '}
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
