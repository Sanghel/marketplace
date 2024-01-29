'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'
import { createSafeContext } from '../utils/createSafeContext'

type MacropayContextType = {
  categoryChecked: {}
  setCategoryChecked: Dispatch<SetStateAction<{}>>
  filterCheckProducts: Product[]
  setFilterCheckProducts: Dispatch<SetStateAction<Product[]>>
  products: Product[]
  setProducts: Dispatch<SetStateAction<Product[]>>
  minPrice: string
  setMinPrice: Dispatch<SetStateAction<string>>
  maxPrice: string
  setMaxPrice: Dispatch<SetStateAction<string>>
  filterProductsByRangePrice: Product[]
  setFilterProductsByRangePrice: Dispatch<SetStateAction<Product[]>>
  rating: number | undefined | null
  setRating: Dispatch<SetStateAction<number | undefined | null>>
}


export const [MacropayContextProvider, useMacropayContext] =
  createSafeContext<MacropayContextType>()
