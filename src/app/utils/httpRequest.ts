const BASE_URL = 'https://api.escuelajs.co/api/v1'

export async function getAllProducts() {
  // const response = await fetch(BASE_URL + '/products?offset=0&limit=10')
  const response = await fetch(BASE_URL + '/products')
  const data = await response.json()
  return data
}

export async function getCategories() {
  const response = await fetch(BASE_URL + '/categories')
  const data = await response.json()
  return data
}

export async function getAllProductsByCategory(id: number) {
  const response = await fetch(BASE_URL + `/products/?categoryId=${id}`)
  const data = await response.json()
  return data
}