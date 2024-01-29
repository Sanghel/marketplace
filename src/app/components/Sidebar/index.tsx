import * as React from 'react';
import { createTheme, ThemeProvider, Divider, Box, FormGroup, FormControlLabel, Checkbox, Typography, Rating } from '@mui/material';
import FilterPrice from '../FilterPrice';
import { useEffect, useState } from 'react';
import { useMacropayContext } from '@/app/context';
import { useParams } from 'next/navigation';
import { brands } from '@/app/[category]/page';


export default function Sidebar () {
  const [brandsList, setBrandsList] = useState<string[]>()
  const { products, categoryChecked, setCategoryChecked, filterCheckProducts, setFilterCheckProducts, rating, setRating } = useMacropayContext()
  const params = useParams()

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryChecked({ ...categoryChecked, [event.target.value]: event.target.checked });
    if (event.target.checked) {
      const productsFilter = products.filter(product => product.brand === event.target.value);
      setFilterCheckProducts(prevFilterProducts => [...prevFilterProducts, ...productsFilter]);
    } else {
      const productsFilter = filterCheckProducts.filter(product => product.brand !== event.target.value);
      setFilterCheckProducts([...productsFilter]);
    }
  }

  useEffect(() => {
    if (params.category === 'shoes') setBrandsList(brands.shoes)
    if (params.category === 'electronics') setBrandsList(brands.electronics)
    if (params.category === 'furniture') setBrandsList(brands.furniture)
  }, [])

  return (
    <>
      <Box padding={0} sx={styles.box}>
        <Typography variant="body1" color="primary" sx={styles.text}>Marcas</Typography>
          {brandsList?.map(brand => (
            <div key={brand} style={styles.checkboxContainer}>
              <input type='checkbox' name='brands' value={brand} id={brand} onChange={handleCheckbox}/>
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        <Divider />
        <Typography variant="body1" color="primary" sx={styles.text}>Precio</Typography>
        <FilterPrice />
        <Divider />
        <Typography variant="body1" color="primary" sx={styles.text}>Reviews</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          sx={{ margin: '1rem 0 0 1rem' }}
        />
      </Box>
    </>
  );
}

const styles = {
  box: {
    width: '100%',
    height: '480px',
    bgcolor: 'background.paper',
    boxShadow: '0px 3px 6px #00000029',
  },
  text: {
    paddingLeft: '20px',
    fontWeight: 'bold',
    paddingTop: '20px'
  },
  checkboxContainer: {
    display: 'flex',
    gap: '5px',
    with: '100%',
    alignItems: 'center',
    marginLeft: '2.5rem',
    marginBlock: '0.5rem',
    color: '#2B3445'
  }
}
