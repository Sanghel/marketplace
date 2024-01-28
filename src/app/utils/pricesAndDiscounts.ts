export const discount = (price: number | undefined) => {
  if (!price) return ''
  if (price >= 80) return '30'
  if (price >= 50) return '20'
  if (price >= 30) return '10'
};

export const newPrice = (price: number | undefined) => {
  if (!price) return ''
  if (price < 30) return price
  const discountProduct = discount(price)
  const priceWithDiscount = (price * (1 - (Number(discountProduct) / 100))).toFixed(2)
  return priceWithDiscount
}

export const pricePerMonth = (price: number | undefined) => {
  if (!price) return ''
  const feeValue = (price / 6).toFixed(2)
  return feeValue
}

export const pricePerWeek = (price: number | undefined) => {
  if (!price) return ''
  const feeValue = (price / 24).toFixed(2)
  return feeValue
}