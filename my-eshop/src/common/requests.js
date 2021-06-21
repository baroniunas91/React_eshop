const fakeStoreApiUrl = 'https://fakestoreapi.com';

export const getProducts = {
  url: `${fakeStoreApiUrl}/products`,
  method: 'GET',
};

export const getProduct = (id) => ({
  url: `${fakeStoreApiUrl}/products/${id}`,
  method: 'GET',
});

export const addToCart = (productId, quantity) => ({
  url: `${fakeStoreApiUrl}/carts`,
  method: 'POST',
  data: { userId: 5, products: [{ productId, quantity }] },
});

export const getCart = {
  url: 'https://fakestoreapi.com/carts/5',
  method: 'GET',
};
