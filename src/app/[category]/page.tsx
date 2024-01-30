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
  const { products, setProducts, filteredProducts, minPrice, maxPrice, brandChecked, ratingChecked } = useMacropayContext()
  const isAnyBrandChecked = Object.values(brandChecked).includes(true)
  const isAnyRatingChecked = Object.values(ratingChecked).includes(true)

  useEffect(() => {
    const fetchProductsFunction = async () => {
      const fetchProducts: Product[] = await getAllProducts()
      console.log(fetchProducts)
      fetchProducts.forEach(product => {
        product.stars = Math.ceil(Math.random() * 5)
        if (product.category.name === 'Shoes') product.brand = brands.shoes[product.stars - 1]
        if (product.category.name === 'Electronics') product.brand = brands.electronics[product.stars - 1]
        if (product.category.name === 'Furniture') product.brand = brands.furniture[product.stars - 1]
      })
      const producstByCategory = fetchProducts.filter(product => product.category.name.toLocaleLowerCase() === params.category)
      setProducts(producstByCategory)
      console.log(producstByCategory)
    }
    fetchProductsFunction()
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container padding={3} justifyContent="center" sx={{ position: 'relative', maxWidth: '1500px', margin: '0 auto' }}>
        <Grid item md={3} lg={2} sx={styles.gridContainer}>
          <Sidebar />
        </Grid>
        <Grid item sm={12} md={9} lg={10} sx={styles.gridContainerCards}>
          <Grid container gap={2} sx={{ width: '100%' }} columns={{xs: 6,  sm: 13, md: 13, lg: 13 }}>
            {(filteredProducts.length === 0 && !isAnyBrandChecked && !isAnyRatingChecked) && products?.map((product) => (
              <Grid item xs={12} sm={6} lg={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
            {(filteredProducts.length > 0) && filteredProducts?.map((product) => (
              <Grid item xs={12} sm={6} lg={4} key={product.id} sx={styles.singleCardContainer}>
                <ProductCard product={product} />
              </Grid>
            ))}
            {/* {(filterProductsByRangePrice.length > 0) && filterProductsByRangePrice?.map((product) => (
              <Grid item xs={12} sm={6} lg={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))} */}
            {(filteredProducts.length === 0 && !!isAnyBrandChecked || !!isAnyRatingChecked) && (
              <div>NO SE ENCUENTRAN PRODUCTOS CON ESTAS CARACTERISTICAS</div>
            )}
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
    maxWidth: '300px',
    position: 'sticky',
    display: 'flex',
    maxHeight: '600px',
    justifyCcontent: 'center',
    '@media (max-width: 900px)': {
      display: 'none'
    },
    padding: '0!important'
  },
  gridContainerCards: {
    // display: 'flex',
    maxHeight: '1200px',
    justifyCcontent: 'center',
    overflowY: 'scroll',
    paddingLeft: 3
  },
  singleCardContainer: {
    minHeight: '460px'
  }
}
export const brands = {
  shoes: ['Zara', 'Bershka', 'New Balance', 'Nike', 'Adidas'],
  electronics: ['Xiaomi', 'Samsung', 'Huaweii', 'Dell', 'Apple'],
  furniture: ['AOJEZOR', 'VTRIN', 'Maupvit', 'Z&L House', 'Mavivegue']
}
