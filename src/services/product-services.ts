const api = "https://fakestoreapi.com/products"

export const getAllProducts = () =>
  fetch(`${api}`)
    .then(res => res.json())

export const getAllCategories = () =>
  fetch(`${api}/categories`)
    .then(res => res.json())

export const getSpesificCategories = (category: string) =>
  fetch(`${api}/category/${category}`)
    .then(res => res.json())

export const getSpesificProduct = (id: number) =>
  fetch(`${api}/${id}`)
    .then(res => res.json())
    
export const getSpesificPrice = (id: number) =>
  fetch(`${api}/${id}`)
    .then(res => res.json())
    .then(data => data.price)