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
// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)

// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())

// export const search = (query) =>
//   fetch(`${api}/search`, {
//     method: 'POST',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ query })
//   }).then(res => res.json())
//     .then(data => data.books)