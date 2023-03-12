import { faker } from "@faker-js/faker";

faker.locale = "es_MX";

const genders = ["male", "female"];

const roles = ["admin", "user", "developer", "tester", "provider", "manager"];

const cleanString = (string) => {
  string = string.replaceAll(/[àáäâ]/g, "a").replaceAll(/[ÀÁÄÂ]/g, "A");
  string = string.replaceAll(/[èéëê]/g, "e").replaceAll(/[ÈÉËÊ]/g, "E");
  string = string.replaceAll(/[ìïïî]/g, "i").replaceAll(/[ÌÏÏÎ]/g, "I");
  string = string.replaceAll(/[òóöô]/g, "o").replaceAll(/[ÒÓÖÔ]/g, "O");
  string = string.replaceAll(/[ùúüû]/g, "u").replaceAll(/[ÙÚÜÛ]/g, "U");
  string = string.replaceAll(/ñ/g, "n").replaceAll(/Ñ/g, "N");
  string = string.replaceAll(/\s/g, "_");

  return string;
};

const fakeUser = async () => {
  const randomSex = genders.at(Math.floor(Math.random() * genders.length));
  const fakeFirstName = faker.name.firstName(randomSex);
  const fakeLastName = faker.name.lastName(randomSex);
  const fakeEmail = `${cleanString(fakeFirstName)}.${cleanString(
    fakeLastName
  )}@${faker.internet.domainName()}`;
  const fakeRole = roles.at(Math.floor(Math.random() * roles.length));

  return {
    firstName: fakeFirstName,
    lastName: fakeLastName,
    email: fakeEmail,
    verifiedEmail: faker.datatype.boolean(),
    gender: randomSex,
    avatar: faker.image.avatar(),
    address: {
      street: faker.address.streetAddress(),
      zipcode: faker.address.zipCode(),
      city: faker.address.cityName(),
      state: faker.address.state(),
    },
    dateOfBirth: faker.date.birthdate({ min: 18, max: 64, mode: "age" }),
    role: fakeRole,
  };
};

export default fakeUser;
