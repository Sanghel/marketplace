'use client'

import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
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