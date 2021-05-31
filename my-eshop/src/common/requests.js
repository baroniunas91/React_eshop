const fakeStoreApiUtl = 'https://fakestoreapi.com';

export const getProducts = {
  url: `${fakeStoreApiUtl}/products`,
  method: 'GET',
};

export const getProduct = (id) => ({
  url: `${fakeStoreApiUtl}/products/${id}`,
  method: 'GET',
});
