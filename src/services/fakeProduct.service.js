import fakeProduct from "../mocks/product.mock.js";

export const getFakeProducts = async (count = 1) => {
  const fakeProducts = [];

  try {
    for (let i = 0; i < count; i++) {
      fakeProducts.push(await fakeProduct());
    }

    return fakeProducts;
  } catch (error) {
    throw new Error(error.message);
  }
};
