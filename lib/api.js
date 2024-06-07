// lib/api.js
export const fetchProducts = async (search = '') => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${search}`);
    const data = await res.json();
    return data.products;
  };
  
  export const fetchProductById = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;
  };
  