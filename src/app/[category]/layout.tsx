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
  const [categoryChecked, setCategoryChecked] = useState<{}>({
    Clothes: false,
    Electronics: false,
    Furniture: false,
    Shoes: false,
    Miscellaneous: false,
  })
  const [filterCheckProducts, setFilterCheckProducts] = useState<Array<Product>>([])
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filterProductsByRangePrice, setFilterProductsByRangePrice] = useState<Array<Product>>([])
  const [rating, setRating] = useState<number | undefined | null>()

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
        <Header />
        <MacropayContextProvider
          value={{
            products,
            setProducts,
            categoryChecked,
            setCategoryChecked,
            filterCheckProducts,
            setFilterCheckProducts,
            minPrice,
            setMinPrice,
            maxPrice,
            setMaxPrice,
            filterProductsByRangePrice,
            setFilterProductsByRangePrice,
            rating,
            setRating
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
    }
  }
});