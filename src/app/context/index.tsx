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
}


export const [MacropayContextProvider, useMacropayContext] =
  createSafeContext<MacropayContextType>()


// import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

// export const MacropayContext = createContext<MacropayContextType | null>(null)

// export const MacropayProvider = (props: { children: React.ReactNode}) => {
//   const [products, setProducts] = useState<Array<Product>>([])
//   const [categoryChecked, setCategoryChecked] = useState<{}>({
//     Clothes: false,
//     Electronics: false,
//     Furniture: false,
//     Shoes: false,
//     Miscellaneous: false,
//   })
//   const [filterCheckProducts, setFilterCheckProducts] = useState<Array<Product>>([])
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [filterProductsByRangePrice, setFilterProductsByRangePrice] = useState<Array<Product>>([])

//   return (
//     <MacropayContext.Provider
//       value={{
//         products,
//         setProducts,
//         categoryChecked,
//         setCategoryChecked,
//         filterCheckProducts,
//         setFilterCheckProducts,
//         minPrice,
//         setMinPrice,
//         maxPrice,
//         setMaxPrice,
//         filterProductsByRangePrice,
//         setFilterProductsByRangePrice
//       }}
//     >
//       {props.children}
//     </MacropayContext.Provider>
//   )
// }
