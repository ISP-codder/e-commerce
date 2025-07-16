import React, { useEffect, useRef, useState } from 'react';
import {
  useGetProductByNameQuery,
  useGetProductsQuery,
} from '../../features/productApi.js';
import MapCard from '../../components/MapCard/MapCard.jsx';
import { useSelector } from 'react-redux';
import Loading from '../../helpers/Loading/Loading.jsx';

function Menu() {
  const loaderRef = useRef(null);
  const searchTerm = useSelector((state) => state.searchSlice.searchValue);
  const { data: products = [], isLoading, isFetching } = useGetProductsQuery();

  const { data: searchResults } = useGetProductByNameQuery(searchTerm, {
    skip: searchTerm.length < 3,
  });
  const filteredProducts = React.useMemo(
    () => products.filter((product) => product.images),
    [products],
  );

  if (isLoading) return <Loading />;

  return searchTerm.length === 0 ? (
    <MapCard
      products={filteredProducts}
      isLoading={isLoading}
      isFetching={isFetching}
      loaderRef={loaderRef}
    />
  ) : (
    <>
      {searchResults && (
        <MapCard
          products={searchResults}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      )}
    </>
  );
}

export default Menu;
