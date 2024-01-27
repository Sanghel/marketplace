import * as React from 'react';
import { createTheme, ThemeProvider, Divider, Box, FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';
import FilterPrice from '../FilterPrice';
import { useEffect, useState } from 'react';
import { useMacropayContext } from '@/app/context';


export default function Sidebar () {
  const [categories, setCategories] = useState<Array<Category>>([])
  const { products, categoryChecked, setCategoryChecked, filterCheckProducts, setFilterCheckProducts } = useMacropayContext()
  
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {

    setCategoryChecked({ ...categoryChecked, [event.target.value]: event.target.checked });
    if (event.target.checked) {
      const productsFilter = products.filter(product => product.category.name === event.target.value);
      setFilterCheckProducts(prevFilterProducts => [...prevFilterProducts, ...productsFilter]);
    } else {
      const productsFilter = filterCheckProducts.filter(product => product.category.name !== event.target.value);
      setFilterCheckProducts([...productsFilter]);
    }
  }

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories?offset=0&limit=5')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Box padding={0} sx={styles.box}>
        <Typography variant="body1" color="primary" sx={styles.text}>Categorias</Typography>
          {categories.map(category => (
            <div key={category.name} style={styles.checkboxContainer}>
              <input type='checkbox' name='lenguajes' value={category.name} id={category.name} onChange={handleCheckbox}/>
              <label htmlFor={category.name}>{category.name}</label>
            </div>
          ))}
        <Divider />
        <Typography variant="body1" color="primary" sx={styles.text}>Precio</Typography>
        <FilterPrice />
        <Divider />
        <Typography variant="body1" color="primary" sx={styles.text}>Reviews</Typography>
      </Box>
    </ThemeProvider>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: '#013E9B' },
    secondary: { main: '#FFD300'},
  },
});

const styles = {
  box: {
    width: '100%',
    height: '600px',
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
    marginBlock: '0.25rem',
    color: '#2B3445'
  }
}
