import fakeUser from "../mocks/user.mock.js";

export const getFakeUsers = async (count = 1) => {
  const fakeUsers = [];

  for (let i = 0; i < count; i++) {
    fakeUsers.push(await fakeUser());
  }

  return fakeUsers;
};
