const api = "https://fakestoreapi.com/carts"

export const get = (id:number) =>
  fetch(`${api}/${id}`)
    .then(res => res.json())