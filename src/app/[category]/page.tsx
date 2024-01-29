'use client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import { useMacropayContext } from "../context";
import { getAllProducts } from "../utils/httpRequest";
import { useParams } from 'next/navigation';
import BannerSalider from '../components/BannerSlider';

export default function CategoryPage() {
  const params = useParams()
  const { products, setProducts, filterCheckProducts, filterProductsByRangePrice, minPrice, maxPrice } = useMacropayContext()
  
  useEffect(() => {
    const fetchProductsFunction = async () => {
      const fetchProducts: Product[] = await getAllProducts()
      fetchProducts.forEach(product => {
        product.stars = Math.ceil(Math.random() * 5)
        if (product.category.name === 'Shoes') product.brand = brands.shoes[product.stars - 1]
        if (product.category.name === 'Electronics') product.brand = brands.electronics[product.stars - 1]
        if (product.category.name === 'Furniture') product.brand = brands.furniture[product.stars - 1]
      })
      const producstByCategory = fetchProducts.filter(product => product.category.name.toLocaleLowerCase() === params.category)
      setProducts(producstByCategory)
    }
    fetchProductsFunction()
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container maxWidth="xl" spacing={2} padding={2} paddingInline={6} justifyContent="center" sx={{ position: 'relative' }}>
        <Grid item md={3} sx={styles.gridContainer}>
          <Sidebar />
        </Grid>
        <Grid item sm={12} md={9} sx={styles.gridContainerCards}>
          <Grid container spacing={2}>
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
      <BannerSalider />
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
    maxHeight: '600px',
    justifyCcontent: 'center',
    '@media (max-width: 900px)': {
      display: 'none'
    }
  },
  gridContainerCards: {
    display: 'flex',
    maxHeight: '1200px',
    justifyCcontent: 'center',
    overflowY: 'scroll'
  }
}
export const brands = {
  shoes: ['Zara', 'Bershka', 'New Balance', 'Nike', 'Adidas'],
  electronics: ['Xiaomi', 'Samsung', 'Huaweii', 'Dell', 'Apple'],
  furniture: ['AOJEZOR', 'VTRIN', 'Maupvit', 'Z&L House', 'Mavivegue']
}
