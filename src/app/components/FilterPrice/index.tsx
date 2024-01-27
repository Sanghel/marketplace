import React from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useMacropayContext } from '@/app/context';

export default function FilterPrice () {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice, products, setFilterProductsByRangePrice } = useMacropayContext()

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(event.target.value);
    let productsByRange
    if (!maxPrice) {
      setMaxPrice('99999999')
      productsByRange = products.filter(product => product.price >= Number(event.target.value))
    } else {
      productsByRange = products.filter(product => (product.price >= Number(event.target.value) && product.price <= Number(maxPrice)))
    }
    setFilterProductsByRangePrice([...productsByRange]);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
    let productsByRange
    if (!minPrice) {
      setMinPrice('0')
      productsByRange = products.filter(product => product.price <= Number(event.target.value))
    } else {
      productsByRange = products.filter(product => (product.price <= Number(event.target.value) && product.price >= Number(minPrice)))
    }
    setFilterProductsByRangePrice([...productsByRange]);
  };

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
        type="number"
        value={minPrice}
        onChange={handleMinPriceChange}
        variant="outlined"
        margin="normal"
      />
      <span>-</span>
      <TextField
        label="Max"
        type="number"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        variant="outlined"
        margin="normal"
      />
    </Stack>
  );
};