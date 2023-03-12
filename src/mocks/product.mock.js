import { faker } from "@faker-js/faker";
import * as FakeImageUrlService from "../services/fakeImageUrl.service.js";

faker.locale = "es_MX";

const fakeProduct = async () => {
  const randomImages = await FakeImageUrlService.getFakeImageUrls(
    Math.floor(Math.random() * 9) + 1
  );

  return {
    _id: faker.database.mongodbObjectId,
    code: faker.random.alphaNumeric(9),
    title: `${faker.commerce.product()} ${faker.commerce.productAdjective()} ${faker.color.human()}`,
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(18, 729, 2),
    images: randomImages,
  };
};

export default fakeProduct;
