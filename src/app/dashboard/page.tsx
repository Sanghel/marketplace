'use client'

import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { useMacropayContext } from "../context";

export default function Home() {
  const { products, setProducts, filterCheckProducts, filterProductsByRangePrice, } = useMacropayContext()

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=50')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [products, setProducts]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container maxWidth="xl" spacing={2} padding={2} paddingInline={6} justifyContent="center" sx={{ position: 'relative' }}>
        <Grid item md={3} sx={styles.gridContainer}>
          <Sidebar />
        </Grid>
        <Grid item sm={12} md={9} sx={styles.gridContainerCards}>
          <Grid container spacing={2}>
            {/* {minPrice && filterProductsByMinPrice?.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
            {maxPrice && filterProductsByMaxPrice?.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))} */}
            {(filterCheckProducts.length > 0) && filterCheckProducts?.map((product) => (
              <Grid item xs={12} sm={6} lg={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
            {(filterProductsByRangePrice.length > 0) && filterProductsByRangePrice?.map((product) => (
              <Grid item xs={12} sm={6} lg={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
            {(filterCheckProducts.length === 0) && products?.map((product) => (
              <Grid item xs={12} sm={6} lg={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
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
  containerBody: {
    height: 'auto',
    display: 'flex',
    gap: '2rem',
  },
  gridContainer: {
    position: 'sticky',
    display: 'flex',
    height: '600px',
    justifyCcontent: 'center',
    '@media (max-width: 900px)': {
      display: 'none'
    }
  },
  gridContainerCards: {
    display: 'flex',
    height: '1500px',
    justifyCcontent: 'center',
    overflowY: 'scroll'
  }
}
