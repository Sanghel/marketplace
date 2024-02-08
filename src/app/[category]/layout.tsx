'use client'

import { useState } from "react";
import { Container, createTheme, ThemeProvider, Typography } from "@mui/material";
import { MacropayContextProvider } from "../context";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [products, setProducts] = useState<Array<Product>>([])
  const [ratingChecked, setRatingChecked] = useState<{} | undefined>()
  const [brandChecked, setBrandChecked] = useState<{}>({})
  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([])
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [rating, setRating] = useState<number | null | undefined>(0)

  return (
    <html lang="en">
      <body style={{ position: "relative" }}>
        <ThemeProvider theme={theme}>
        <Header />
        <MacropayContextProvider
          value={{
            products,
            setProducts,
            brandChecked,
            setBrandChecked,
            filteredProducts,
            setFilteredProducts,
            minPrice,
            setMinPrice,
            maxPrice,
            setMaxPrice,
            rating,
            setRating,
            ratingChecked,
            setRatingChecked,
          }}
        >

          {children}
        </MacropayContextProvider>
        <Footer />
        </ThemeProvider>
        <Container sx={styles.floatDiv}>
          <Typography variant='h5' sx={styles.floatDiv.text1}>
            COMPRA A
          </Typography>
          <Typography variant='h4' sx={styles.floatDiv.text2}>
            CRÉDITO
          </Typography>
        </Container>
      </body>
    </html>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: '#013E9B' },
    secondary: { main: '#FFD300'},
    info: { main: '#7D879C'}
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // backgroundColor: '#FFD300'
        },
        contained: {
          background: '#FFD300'
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '5000px!important'
        }
      }
    }
  }
});

const styles = {
  floatDiv: {
    width: '250px',
    height: '250px',
    backgroundColor: '#FFD300',
    position: 'absolute',
    top: 0,
    right: 0,
    clipPath: 'ellipse(130px 130px at 85% 15%)',
    zIndex:1000,
    '@media (max-width: 768px)': {
      display: 'none'
    },
    text1: {
      transform: 'rotate(45deg)',
      color: '#fff',
      margin: '25px 0 0 50px',
      paddingLeft: '65px',
      width: '200px'
    },
    text2: {
      transform: 'rotate(45deg)',
      color: '#fff',
      margin: '0 0 0px 75px',
      padding: '0 0 0 0px'
    },
  }
}