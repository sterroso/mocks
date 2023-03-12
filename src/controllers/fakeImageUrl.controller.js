import * as FakeImageUrlService from "../services/fakeImageUrl.service.js";

const isValidImageDimension = (dimension) => {
  const numberDimension = Number(dimension ?? 0);

  return (
    !isNaN(numberDimension) &&
    numberDimension >= 16 &&
    numberDimension % 1 === 0
  );
};

const isValidImageCount = (count) => {
  const numberCount = Number(count ?? 0);

  return !isNaN(numberCount) && numberCount > 0 && numberCount % 1 === 0;
};

export const getFakeImageUrls = async (req, res) => {
  const returnObject = {};
  let returnStatus = 200;

  const { count = 10 } = req.params;

  if (!isValidImageCount(count)) {
    returnStatus = 400;

    returnObject.status = "error";
    returnObject.error = "count parameter value is not valid";
  } else {
    const { width = 640, height = 480 } = req.query;

    if (isValidImageDimension(width) && isValidImageDimension(height)) {
      try {
        const fakeImageUrls = await FakeImageUrlService.getFakeImageUrls(
          Number(count),
          width,
          height
        );

        if (fakeImageUrls.length) {
          returnObject.status = "success";
          returnObject.fakeImageUrl = fakeImageUrls;
        } else {
          returnStatus = 500;

          returnObject.status = "error";
          returnObject.error = "Unknown Server Error";
        }
      } catch (error) {
        returnStatus = 500;

        returnObject.status = "error";
        returnObject.error = error.message;
      }
    } else {
      returnStatus = 400;

      returnObject.status = "error";
      returnObject.error = "Invalid dimensions.";
    }
  }

  res.status(returnStatus).json(returnObject);
};
