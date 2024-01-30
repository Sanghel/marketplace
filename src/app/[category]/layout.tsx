'use client'

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MacropayContextProvider } from "../context";
import { createTheme, ThemeProvider } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [products, setProducts] = useState<Array<Product>>([])
  const [ratingChecked, setRatingChecked] = useState<{}>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  })
  const [brandChecked, setBrandChecked] = useState<{}>({
    brand1: false,
    brand2: false,
    brand3: false,
    brand4: false,
    brand5: false
  })
  // const [isRatingChecked, setIsRatingChecked] = useState<boolean>(false)
  const [filteredProducts, setFilteredProducts] = useState<Array<Product>>([])
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  // const [filterProductsByRangePrice, setFilterProductsByRangePrice] = useState<Array<Product>>([])
  const [rating, setRating] = useState<number | null | undefined>(0)

  return (
    <html lang="en">
      <body>
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
            // filterProductsByRangePrice,
            // setFilterProductsByRangePrice,
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