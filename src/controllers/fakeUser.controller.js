import * as FakeUserService from "../services/fakeUser.service.js";

const isValidUserCount = (count) => {
  const numberCount = Number(count ?? 0);

  return !isNaN(numberCount) && numberCount > 0 && numberCount % 1 === 0;
};

export const getFakeUsers = async (req, res) => {
  const returnObject = {};
  let returnStatus = 200;

  const { count = 10 } = req.params;

  if (!isValidUserCount(count)) {
    returnStatus = 400;

    returnObject.status = "error";
    returnObject.error = "count parameter value is not valid.";
  } else {
    try {
      const fakeUsers = await FakeUserService.getFakeUsers(Number(count));

      returnObject.status = "success";
      returnObject.fakeUsers = fakeUsers;
    } catch (error) {
      returnStatus = 500;

      returnObject.status = "error";
      returnObject.error = error.message;
    }
  }

  res.status(returnStatus).json(returnObject);
};
