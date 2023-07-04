export const getProducts = (category) => {
    return fetch(`https://fakestoreapi.com/products${category !== 'all' ? `/category/${category}` : ''}`);
  };
  
  
  