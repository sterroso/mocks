import fakeImageUrl from "../mocks/imageUrl.mock.js";

export const getFakeImageUrls = async (
  count = 1,
  width = 640,
  height = 480
) => {
  try {
    const urls = [];

    for (let i = 0; i < count; i++) {
      urls.push(await fakeImageUrl(width, height));
    }

    return urls;
  } catch (error) {
    throw new Error(error.message);
  }
};
