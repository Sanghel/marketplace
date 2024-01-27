import { Dispatch, SetStateAction, createContext } from 'react'
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
}

export const [MacropayContextProvider, useMacropayContext] =
  createSafeContext<MacropayContextType>()