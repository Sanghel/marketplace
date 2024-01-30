'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import { createSafeContext } from '../utils/createSafeContext'

type MacropayContextType = {
  brandChecked: {}
  setBrandChecked: Dispatch<SetStateAction<{}>>
  ratingChecked: {}
  setRatingChecked: Dispatch<SetStateAction<{}>>
  filteredProducts: Product[]
  setFilteredProducts: Dispatch<SetStateAction<Product[]>>
  products: Product[]
  setProducts: Dispatch<SetStateAction<Product[]>>
  minPrice: string
  setMinPrice: Dispatch<SetStateAction<string>>
  maxPrice: string
  setMaxPrice: Dispatch<SetStateAction<string>>
  // filterProductsByRangePrice: Product[]
  // setFilterProductsByRangePrice: Dispatch<SetStateAction<Product[]>>
  rating: number | null | undefined
  setRating: Dispatch<SetStateAction<number | null | undefined>>
}


export const [MacropayContextProvider, useMacropayContext] =
  createSafeContext<MacropayContextType>()
