'use client'

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MacropayContextProvider } from "../context";

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

  return (
    <html lang="en">
      <body>
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
            setFilterProductsByRangePrice
          }}
        >

          {children}
        </MacropayContextProvider>
        <Footer />
      </body>
    </html>
  );
}
