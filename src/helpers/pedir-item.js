export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error al obtener el producto");
          }
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject({ error: error.message });
        });
    });
  };
  