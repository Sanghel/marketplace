import * as React from 'react';
import { createTheme, ThemeProvider, Divider, Box, FormGroup, FormControlLabel, Checkbox, Typography, Rating } from '@mui/material';
import FilterPrice from '../FilterPrice';
import { useEffect, useState } from 'react';
import { useMacropayContext } from '@/app/context';
import { useParams } from 'next/navigation';
import { brands } from '@/app/[category]/page';

export default function Sidebar () {
  const [brandsList, setBrandsList] = useState<string[]>()
  const { products, filteredProducts, setFilteredProducts, rating, setRating, brandChecked, setBrandChecked, ratingChecked, setRatingChecked } = useMacropayContext()
  const params = useParams()

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.checked);
    setBrandChecked({ ...brandChecked, [event.target.value]: event.target.checked })
    if (event.target.checked && filteredProducts.length === 0) {
      const productsFilter = products.filter(product => product.brand === event.target.value)
      setFilteredProducts(productsFilter)
    } else if (event.target.checked && filteredProducts.length !== 0) {
      const productsFilter = products.filter(product => product.brand === event.target.value)
      setFilteredProducts(prevFilterProducts => [...prevFilterProducts, ...productsFilter])
    } else {
      const productsFilter = filteredProducts.filter(product => product.brand !== event.target.value)
      setFilteredProducts([...productsFilter])
    }
  }

  // const handleRating = (event: React.SyntheticEvent<Element, Event>, newValue: number | null | undefined) => {
  //   const newRatingValue = newValue === rating ? 0 : newValue;

  //   if (!newRatingValue && filteredProducts.length === 0) {
  //     setFilteredProducts([]);
  //   } else if (newRatingValue && filteredProducts.length !== 0) {
  //     const productsFilter = filteredProducts.filter(product => {
  //       if ((product.stars === newRatingValue) && idsUnicos.has(product.id)) {
  //         idsUnicos.add(product.id);
  //         return true;
  //       } else {
  //         return false
  //       }
  //     })
  //     setFilteredProducts(prevFilterProducts => [...prevFilterProducts, ...productsFilter])
  //   } else {
  //     return
  //     const productsFilter = filteredProducts.filter(product => product.stars !== newRatingValue)
  //     setFilteredProducts([...productsFilter])
  //   }
    
  //   setRating(newRatingValue)
  //   console.log(newRatingValue)
  //   console.log(rating)



  // }

  useEffect(() => {
    if (params.category === 'shoes') setBrandsList(brands.shoes)
    if (params.category === 'electronics') setBrandsList(brands.electronics)
    if (params.category === 'furniture') setBrandsList(brands.furniture)
  }, [])

  return (
    <>
      <Box padding={0} sx={styles.box}>
        <Typography variant="body1" color="primary" sx={styles.text}>Marcas</Typography>
          {brandsList?.map((brand, idx) => (
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
          // onChange={(event, newValue) => handleRating(event, newValue)}
          sx={{ margin: '1rem 0 0 1rem' }}
        />
      </Box>
    </>
  );
}

const styles = {
  box: {
    width: '100%',
    // maxWidth: '300px',
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
