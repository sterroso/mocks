import { faker } from "@faker-js/faker";

const fakeImageUrl = async (width = 640, height = 480) => {
  return faker.image.imageUrl(width, height);
};

export default fakeImageUrl;
