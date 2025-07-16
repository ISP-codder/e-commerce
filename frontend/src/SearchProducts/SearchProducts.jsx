import React, { useState } from 'react';
import { TextField, debounce } from '@mui/material';
import { useGetProductByNameQuery } from '../features/productApi.js';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchValue } from '../slices/search.js';

const Search = () => {
  const searchTerm = useSelector((state) => state.searchSlice.searchValue);
  const dispatch = useDispatch();

  const { data: searchResults, isLoading } = useGetProductByNameQuery(
    searchTerm,
    {
      skip: searchTerm.length < 3,
    },
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    dispatch(changeSearchValue(value));
  };

  const debouncedHandleSearchChange = debounce(handleSearchChange, 1000);

  return (
    <div>
      <TextField
        label="Search products"
        variant="outlined"
        onChange={debouncedHandleSearchChange}
        fullWidth
      />
    </div>
  );
};

export default Search;
