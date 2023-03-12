import * as FakeProductService from "../services/fakeProduct.service.js";

const isValidProductCount = (count) => {
  const numberCount = Number(count ?? 0);

  return !isNaN(numberCount) && numberCount > 0 && numberCount % 1 === 0;
};

export const getFakeProducts = async (req, res) => {
  const returnObject = {};
  let returnStatus = 200;

  const { count = 10 } = req.params;

  if (!isValidProductCount(count)) {
    returnStatus = 400;

    returnObject.status = "error";
    returnObject.error = "count parameter value is invalid.";
  } else {
    try {
      const fakeProducts = await FakeProductService.getFakeProducts(
        Number(count)
      );

      if (fakeProducts.length) {
        returnObject.status = "success";
        returnObject.fakeProducts = fakeProducts;
      } else {
        returnStatus = 500;

        returnObject.status = "error";
        returnObject.error = "Unknown Server Error.";
      }
    } catch (error) {
      returnStatus = 500;

      returnObject.status = "error";
      returnObject.error = error.message;
    }
  }

  res.status(returnStatus).json(returnObject);
};
