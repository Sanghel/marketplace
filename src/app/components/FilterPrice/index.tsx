import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useMacropayContext } from '@/app/context';

export default function FilterPrice () {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice, products, filteredProducts, setFilteredProducts } = useMacropayContext()

  useEffect(() => {
    const productsByRange = products.filter(product => {
      const cumplePrecioMinimo = minPrice === '' || product.price >= parseFloat(minPrice)
      const cumplePrecioMaximo = maxPrice === '' || product.price <= parseFloat(maxPrice)
      return cumplePrecioMinimo && cumplePrecioMaximo
    })
    setFilteredProducts(productsByRange)
    
  }, [minPrice, maxPrice])

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingInline={2}
      marginBottom={2}
      gap={1}
    >
      <TextField
        label="Min"
        type="text"
        value={minPrice}
        onChange={(e) =>  setMinPrice(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <span>-</span>
      <TextField
        label="Max"
        type="text"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        variant="outlined"
        margin="normal"
      />
    </Stack>
  );
};