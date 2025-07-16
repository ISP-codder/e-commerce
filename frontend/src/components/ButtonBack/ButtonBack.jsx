import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ButtonBack(props) {
  const navigate = useNavigate();
  return (
    <Button
      style={{
        width: '10%',
        marginTop: '10px',
        backgroundColor: '#8643ce',
        color: 'white',
      }}
      variant="contained"
      onClick={() => navigate(-1)}
    >
      Назад
    </Button>
  );
}

export default ButtonBack;
