'use client'

import Image from "next/image";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

export default function Clothes() {
  return (
    <ThemeProvider theme={theme} >
      <Grid container maxWidth="xl" spacing={2} padding={2} paddingInline={6} justifyContent="center">
        <Grid item md={9} sx={styles.gridContainer} >
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard />
            </Grid>
          </Grid> */}
        </Grid>
        
      </Grid>
      {/* <main className="w-full min-h-screen flex flex-col bg-white"></main> */}
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
    display: 'flex',
    justifyCcontent: 'center',
  }
}