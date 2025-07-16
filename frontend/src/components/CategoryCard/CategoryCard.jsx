import React from 'react';
import {
  useGetProductsByCategoryNameQuery,
  useGetProductsQuery,
} from '../../features/productApi.js';
import { CATEGORIES } from '../../constants/constants.js';
import { useLocation, useParams } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import styles from '../Header/Header.module.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
import MapCard from '../MapCard/MapCard.jsx';

function CategoryCard(props) {
  const location = useLocation();
  const link = location.pathname;
  const category = link.replace(/^\//, '');
  const {
    data: products = [],
    isLoading,
    isError,
  } = useGetProductsByCategoryNameQuery(category);

  return <MapCard products={products} />;
}

export default CategoryCard;
